import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./MovieCardMenu.module.css";

const activeLink = {
  color: "rgb(240, 179, 87)",
};

const MovieCardMenu = ({ id }) => (
  <div className={styles.movieCardMenu}>
    <h2>Additional information:</h2>
    <ul>
      <li>
        <NavLink to={`/movies/${id}/cast`} activeStyle={activeLink}>
          Cast
        </NavLink>
      </li>
      <li>
        <NavLink to={`/movies/${id}/reviews`} activeStyle={activeLink}>
          Reviews
        </NavLink>
      </li>
    </ul>
  </div>
);

MovieCardMenu.propTypes = { id: PropTypes.number.isRequired };

export default MovieCardMenu;
