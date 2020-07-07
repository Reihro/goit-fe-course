import React from "react";
import { CSSTransition } from "react-transition-group";
import ghostTransition from "./../Transition/ghost.module.css";
import style from "./AlertWindow.module.css";

const AlertWindow = ({ delay, toggle, text }) => (
  <CSSTransition
    timeout={delay}
    classNames={ghostTransition}
    in={toggle}
    unmountOnExit
  >
    <div className={style.Alert}>{text}</div>
  </CSSTransition>
);

export default AlertWindow;