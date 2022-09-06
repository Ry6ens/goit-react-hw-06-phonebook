import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import Notiflix from "notiflix";
import PropTypes from "prop-types";

import styles from "./ContactForm.module.scss";
import stylesButton from "../PhonebookOptions/PhonebookOptions.module.scss";
import { addContactAction } from "../../redux/action";
import PhonebookOptions from "../PhonebookOptions/PhonebookOptions";

export default function Form() {
  const [state, setState] = useState({
    name: "",
    number: "",
  });

  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

  const { name, number } = state;

  const nameId = nanoid();
  const numberId = nanoid();

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(state);
    e.target.reset(
      setState({
        name: "",
        number: "",
      })
    );
  };

  const handleChange = ({ target }) => {
    setState((prevState) => {
      return { ...prevState, [target.name]: target.value };
    });
  };

  function addContact(data) {
    contacts.find(({ name }) => data.name === name)
      ? Notiflix.Notify.warning(`${data.name} is already in contacts`)
      : dispatch(addContactAction(data));
  }

  return (
    <form onSubmit={handleSubmit} className={styles.formGroup}>
      <div className={styles.thumb}>
        <label htmlFor={nameId} className={styles.label}>
          Name
        </label>
        <input
          id={nameId}
          className={styles.field}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          required
        />
      </div>
      <div className={styles.thumb}>
        <label htmlFor={numberId} className={styles.label}>
          Number
        </label>
        <input
          id={numberId}
          className={styles.field}
          onChange={handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          required
        />
      </div>
      <PhonebookOptions title="Add contact" className={stylesButton.button} />
    </form>
  );
}

Form.defaultProps = {
  onSubmit: () => {},
};

Form.propTypes = {
  onSubmit: PropTypes.func,
};
