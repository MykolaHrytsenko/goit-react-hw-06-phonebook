import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';
// import { nanoid } from 'nanoid';

export class ContactList extends Component {
  deleteId = Id => {
    this.props.del(Id);
  };
  createList = () => {
    return this.props.contacts.map(({ id, name, number }) => {
      return (
        <li key={id}>
          {`${name}: ${number}`}
          <button
            className={css.btn}
            data-id={id}
            onClick={() => this.deleteId(id)}
          >
            Delete
          </button>
        </li>
      );
    });
  };

  render() {
    return <ul>{this.createList()}</ul>;
  }
}
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  del: PropTypes.func.isRequired,
};
ContactList.defaultProps = {
  contacts: [],
};
