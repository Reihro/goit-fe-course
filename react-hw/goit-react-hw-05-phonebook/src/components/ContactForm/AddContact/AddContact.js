import React, { Component } from "react";
import { validateAll, validations } from "indicative/validator";
import faker from "faker";
import style from "./AddContact.module.css";
import MaskedInput from "react-text-mask";
import ErrorNotification from "../ErrorNotification/ErrorNotification";

const rules = {
  name: [validations.required(), validations.regex(["^[a-zA-Zа-яА-Я]+"])],
  number: "required|string",
};

const messages = {
  "name.required": "Please choose a unique name for your contact",
  "number.required": "Enter a valid phone number.",
  "name.regex": "Contact's name contains invalid characters",
};

export default class AddContactForm extends Component {
  state = {
    name: "",
    number: "",
    errors: null,
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    const { name, number } = this.state;

    validateAll({ name, number }, rules, messages)
      .then(() => {
        this.props.addContact({ name, number });
        this.reset();
      })
      .catch((errors) => {
        const formattedErrors = {};
        errors.forEach((error) => {
          formattedErrors[error.field] = error.message;
        });

        this.setState({
          errors: formattedErrors,
        });
      });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleFake = () => {
    const fakeName = faker.name.firstName();
    const fakeNumber = faker.phone.phoneNumber("(###) ###-####");

    this.setState({ name: fakeName, number: fakeNumber });
  };

  reset = () => {
    this.setState({ name: "", number: "", errors: null });
  };

  render() {
    const { name, number, errors } = this.state;

    return (
      <>
              <form onSubmit={this.handleSubmit} className={style.form}>
          <label htmlFor="name">
            Name
            <input 
              type="text"
              value={name}
              name="name"
              onChange={this.handleChange}
              placeholder="Enter name"
            />
          </label>

          {errors && <ErrorNotification errorType={errors.name} />}
          <label htmlFor="number">
            Number
            <MaskedInput
              mask={[
                "(",
                /\d/,
                /\d/,
                /\d/,
                ")",
                " ",
                /\d/,
                /\d/,
                /\d/,
                "-",
                /\d/,
                /\d/,
                /\d/,
                /\d/,
              ]}
              type="text"
              value={number}
              name="number"
              onChange={this.handleChange}
              placeholder="Enter number"
            />
          </label>
          {errors && <ErrorNotification errorType={errors.number} />}

          <div className={style.formButtons}>
            <button type="submit">Add contact</button>

            <button type="button" onClick={this.handleFake}>
              Generate fake contact
            </button>
          </div>
        </form>
      </>
    );
  }
}