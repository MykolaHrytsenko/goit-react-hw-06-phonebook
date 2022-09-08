import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, getItems } from '../../redux/contacts/contactsSlice';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

export function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getItems);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const formSubmitHandler = contact => {
    const normalzeName = contact.name.toLocaleLowerCase();

    contacts.find(contact => contact.name.toLocaleLowerCase() === normalzeName)
      ? alert(`${contact.name} is already in contacts`)
      : dispatch(addItem(contact));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    formSubmitHandler(contact);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div className={css.form}>
      <form type="submit" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={handleChange}
            value={name}
          />
        </label>

        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
            onChange={handleChange}
            value={number}
          />
        </label>

        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </form>
    </div>
  );
}
