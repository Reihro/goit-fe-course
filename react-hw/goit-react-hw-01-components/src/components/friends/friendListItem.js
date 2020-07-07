import React from "react";
import PropTypes from "prop-types";
import style from "./friends.module.css";

const FriendsListItem = ({ avatar, name, isOnline }) => (
  <li>
    <span className={isOnline ? style.online : style.offline}></span>
    <img src={avatar} alt={name} width="48" />
    <p>{name}</p>
  </li>
);

FriendsListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendsListItem;