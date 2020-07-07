import React from "react";
import style from "./Contacts.module.css";

const Contacts = ({ contacts, onRemoveContact }) => {
  return (
    <ul className={style.phonebook}>
      {contacts.map(({ id, name, number }) => (
        <li
          key={id}
          >
          {name}: {number}
          <input
            type="button"
            value="Delete"
            onClick={() => onRemoveContact(id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default Contacts;
