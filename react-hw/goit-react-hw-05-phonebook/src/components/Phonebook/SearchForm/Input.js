import React from "react";
import PropTypes from "prop-types";

const Input = ({ handleChange }) => (
      <input onChange={handleChange}
    />
  
);

Input.propTypes = {
  title: PropTypes.string,
};

export default Input;