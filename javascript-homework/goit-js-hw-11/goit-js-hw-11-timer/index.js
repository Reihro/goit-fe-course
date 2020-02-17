"use strict";

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate;
    this.target = document.querySelector(selector);
    this.initialTimer();
  }

  initialTimer() {
    let targetDate = this.targetDate.getTime();
    setInterval(
      function(target) {
        let time = targetDate - new Date().getTime();
        if (time > 0) {
          const days = Math.floor(time / (1000 * 60 * 60 * 24));
          const hours = Math.floor(
            (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
          const secs = Math.floor((time % (1000 * 60)) / 1000);
          target.querySelector("#days").textContent = String(days).padStart(
            2,
            "0"
          );
          target.querySelector("#hours").textContent = String(hours).padStart(
            2,
            "0"
          );
          target.querySelector("#mins").textContent = String(mins).padStart(
            2,
            "0"
          );
          target.querySelector("#secs").textContent = String(secs).padStart(
            2,
            "0"
          );
        } else {
          alert("It is right time!");
        }
      },
      1000,
      this.target
    );
  }
}

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Feb 21, 2020")
});