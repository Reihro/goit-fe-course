import React from "react";
import style from "./friends.module.css";
import FriendListItem from "./friendListItem";
import PropTypes from "prop-types";

const FriendsList = ({ friends }) => {
  return (
    <ul className={style.friendList}>
      {friends.length > 0 ? (
        friends.map(({ avatar, name, isOnline, id }) => (
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={id}
          />
        ))
      ) : (
        <li>
          <p>Friend list is empty</p>
        </li>
      )}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendsList;