import React from "react";
import PropTypes from "prop-types";

const leaveFeedback = ({ options, onLeaveFeedback }) => {
  return options.map((option) => (
    <button
      key={option}
      type="button"
      name={option}
      onClick={onLeaveFeedback}
    >
      {option}
    </button>
  ));
};

leaveFeedback.protoTypes = {
  options: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default leaveFeedback;