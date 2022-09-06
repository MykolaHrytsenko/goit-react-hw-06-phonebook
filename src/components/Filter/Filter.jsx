import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { filterItems, getFilter } from '../../features/contacts/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  const changeFilter = e => {
    dispatch(filterItems(e.currentTarget.value));
  };

  return (
    <div>
      <h4>Find contacts by name</h4>
      <input type="text" value={value} onChange={changeFilter}></input>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
