import React from "react";
import style from "./Contacts.module.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import slideTransition from "../../Transitions/slide.module.css";
import ContactContainer from "./Contact/ContactContainer";

const filterContacts = (contacts, filter) => {
	return contacts.filter((contact) =>
		contact.name.toLowerCase().includes(filter.toLowerCase())
	);
};

const Contacts = ({ contacts, filter }) => (
	<TransitionGroup component="ul" className={style.contacts}>
		{filterContacts(contacts, filter).map(({ id, name, number }) => (
			<CSSTransition
				key={id}
				timeout={250}
				classNames={slideTransition}
				unmountOnExit
			>
				<ContactContainer id={id} name={name} number={number} />
			</CSSTransition>
		))}
	</TransitionGroup>
);

export default Contacts;
