import React from "react";
import style from "./Contacts.module.css";

const Contacts = ({ contacts, onRemoveContact }) => {
  return (
    <ul className={style.list}>
      {contacts.map(({ id, name, number}) => (
        <li
          key={id}
          className={style.component}
        >
          {name}: {number}
          <input
            type="button"
            value="Delete"
            onClick={() => onRemoveContact(id)}
            className={style.btn}
          />
        </li>
      ))}
    </ul>
  );
};

export default Contacts;