import React from "react";
import PropTypes from "prop-types";
import styles from "../CastList/CastList.module.css";
import noAvatar from "./noAvatar.jpg";

const IMG_URL = "https://image.tmdb.org/t/p/w500";

const CastList = ({ cast }) => (
  <ul className={styles.castList}>
    {cast.map(({ cast_id, profile_path, name, character }) => {
      const profileImg = profile_path ? IMG_URL + profile_path : noAvatar;

      return (
        <li key={cast_id}>
          <img src={profileImg} alt={name}/>
          <h3>{name}</h3>
          <p>
            Character: 
            {character}
          </p>
        </li>
      );
    })}
  </ul>
);

CastList.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      cast_id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default CastList;