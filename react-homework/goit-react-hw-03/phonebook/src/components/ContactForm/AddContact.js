import React, { Component } from "react";
import { validateAll, validations } from "indicative/validator";
import style from "./AddContact.module.css";
import ErrorNotification from "../Tools/ErrorNotification";

const rules = {
  name: [validations.required(), validations.regex(["^[a-zA-Zа-яА-Я]+"])],
  number: [validations.required(), validations.regex([/^(\([0-9]{3}\)\s*|[0-9]{3}\-)[0-9]{3}-[0-9]{4}$/])],
};

const messages = {
  "name.required": "Please choose a unique name for your contact",
  "number.required": "Enter phone number",
  "name.regex": "Contact's name contains invalid characters",
  "number.regex": "Phone number validation failed",
};

export default class AddContact extends Component {
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

  reset = () => {
    this.setState({ name: "", number: "", errors: null });
  };

  render() {
    const { name, number, errors } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={style.form}>
        <label className={style.title}>
          Name
          <input
            className={style.formInput}
            value={name}
            type="text"
            placeholder="Enter name"
            onChange={this.handleChange}
            name="name"
          />
          {errors && <ErrorNotification errorType={errors.name} />}
        </label>

        <label className={style.title}>
          Number
          <input
            className={style.formInput}
            value={number}
            type="text"
            placeholder="Enter number"
            onChange={this.handleChange}
            name="number"
          />
          {errors && <ErrorNotification errorType={errors.number} />}
        </label>

        <button type="submit" className={style.submitBtn}>
          Add contact
        </button>
      </form>
    );
  }
}