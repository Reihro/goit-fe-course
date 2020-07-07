import React, { Component } from "react";
import shortid from "shortid";
import style from "./ContactForm/AlertWindow/AlertWindow.module.css";
import AddContactForm from "./ContactForm/AddContact/AddContact";
import Contacts from "./Phonebook/Contacts/Contacts";
import PhonebookTitle from "./Phonebook/PhonebookTitle/PhonebookTitle";
import SearchForm from "./Phonebook/SearchForm/SearchForm";
import { CSSTransition } from "react-transition-group";
import ghostTransition from "./Transition/ghost.module.css";

const filterContacts = (contacts, filter) => {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
    alertWindow: false,
  };

  changeFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  addContact = (contact) => {
    const { name } = contact;

    if (this.state.contacts.find((i) => i.name === name)) {
      this.setState({ alertWindow: true });
    } else {
      const contactToAdd = {
        ...contact,
        id: shortid.generate(),
        newItem: true,
      };

      this.setState((state) => ({
        contacts: [contactToAdd, ...state.contacts],
      }));
    }
  };

  removeContact = (id) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((contact) => contact.id !== id),
    }));
  };

  componentDidUpdate() {
    localStorage.setItem("contact", JSON.stringify(this.state.contacts));
  }

  componentDidMount() {
    const contact = localStorage.getItem("contact");

    if (contact) {
      const convrtArr = JSON.parse(contact);
      this.setState(() => ({
        contacts: [...convrtArr],
      }));
    }
    this.setState({ onLoad: true });
  }

  render() {
    const { contacts, filter, alertWindow } = this.state;
    const filteredContacts = filterContacts(contacts, filter);

    return (
      <>
        <PhonebookTitle name="Phonebook" />

        <AddContactForm addContact={this.addContact} />

        <SearchForm
          value={filter}
          handleChange={this.changeFilter}
          toggle={contacts.length > 2 || filter ? true : false}
        />

        <Contacts
          contacts={filteredContacts}
          onRemoveContact={this.removeContact}
        />

        <CSSTransition
          timeout={1000}
          classNames={ghostTransition}
          in={alertWindow}
          onEnter={() => {
            setTimeout(() => {
              this.setState({ alertWindow: false });
            }, 1000);
          }}
          unmountOnExit
        >
          <div className={style.window}>Contact already exists!</div>
        </CSSTransition>
      </>
    );
  }
}