import React, { Component } from "react";
import shortid from "shortid";
import Section from "./Tools/Section";
import Contacts from "./Contacts/Contacts";
import AddContact from "./ContactForm/AddContact";
import SearchForm from "./Tools/ContactFilter";

const filterContacts = (contacts, filter) => {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  changeFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  addContact = (contact) => {
    const { name } = contact;

    if (this.state.contacts.find((i) => i.name === name)) {
      alert(`${name} is already in contacts`);
    } else {
      const contactToAdd = {
        ...contact,
        id: shortid.generate(),
        newContact: true,
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

  componentDidUpdate(prevProps, prevState) {
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
  }

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = filterContacts(contacts, filter);

    return (
      <>
        <Section title="Phonebook">
          <AddContact addContact={this.addContact} />
        </Section>

        <Section title="Contacts">
          {(contacts.length > 2 || filter) && (
            <SearchForm value={filter} onChangeFilter={this.changeFilter} />
          )}
          <Contacts
            contacts={filteredContacts}
            onRemoveContact={this.removeContact}
          />
        </Section>
      </>
    );
  }
}