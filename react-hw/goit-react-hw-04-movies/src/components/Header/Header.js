import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const activeLink = {
  color: "rgb(240, 179, 87)",
};

function Navigation() {
  return (
    <nav className={styles.pageNav}>
      <div className="container">
        <ul >
          <li>
            <NavLink to="/" exact activeStyle={activeLink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" activeStyle={activeLink}>
              Movies
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;