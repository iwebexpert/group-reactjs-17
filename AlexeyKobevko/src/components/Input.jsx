import React from 'react';
import PropTypes from 'prop-types';

export const Input = ({ value, name, type, ...props }) => (
  <input name={name} value={value} type={type} {...props} />
);

Input.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  onchange: PropTypes.func,
};
