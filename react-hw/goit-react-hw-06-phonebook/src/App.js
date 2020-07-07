import React from "react";
import Title from "./components/Phonebook/PhonebookTitle/PhonebookTitle";
import AddContact from "./components/ContactForm/AddContact/AddContactContainer";
import SearchForm from "./components/Phonebook/SearchForm/SearchFormContainer";
import Contacts from "./components/Phonebook/Contacts/ContactsContainer";

const App = () => (
	<>
		<Title name="Phonebook" />

		<AddContact />

		<SearchForm />

		<Contacts />
	</>
);

export default App;
