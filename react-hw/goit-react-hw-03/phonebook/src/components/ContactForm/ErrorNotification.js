import React from "react";
import PropTypes from "prop-types";

const style = {
  color: "blue",
  display: "block",
  fontSize: 14,
  fontWeight: 300,
  marginLeft: 10,
};

const ErrorNotificatrion = ({ errorType }) => (
  <span style={style}>{errorType}</span>
);

ErrorNotificatrion.propTypes = {
  errorType: PropTypes.string.isRequired,
};

export default ErrorNotificatrion;