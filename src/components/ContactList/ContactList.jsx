import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeItem,
  getItems,
  getFilter,
} from '../../redux/contacts/contactsSlice';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(getItems);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const getContactsFilter = () => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };
  const contactsFilter = getContactsFilter();

  return (
    <div>
      <ul>
        {contactsFilter.map(({ id, name, number }) => (
          <li key={id}>
            {`${name}: ${number}`}
            <button
              className={css.btn}
              type="button"
              data-id={id}
              onClick={() => dispatch(removeItem(id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
