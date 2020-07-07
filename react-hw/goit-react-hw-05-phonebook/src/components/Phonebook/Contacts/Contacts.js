import React from "react";
import style from "./Contacts.module.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import slideTransition from "../../Transition/slide.module.css";

const Contacts = ({ contacts, onRemoveContact }) => {
  return (
    <TransitionGroup component="ul" className={style.contacts}>
      {contacts.map(({ id, name, number }) => (
        <CSSTransition
          key={id}
          timeout={250}
          classNames={slideTransition}
          unmountOnExit
        >
          <li className={style.contact}>
            <span className="name">{name}</span>
            <span>{number}</span>
            <button
              onClick={() => onRemoveContact(id)}
            >
              &#10006;
            </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default Contacts;