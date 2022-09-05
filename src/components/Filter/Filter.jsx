import React from 'react';
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => (
  <div>
    <h4>Find contacts by name</h4>
    <input type="text" value={value} onChange={onChange}></input>
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
