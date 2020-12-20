import React from "react";
import PropTypes from "prop-types";

const Notification = ({ message }) => <p>{message}</p>;
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return good || neutral || bad ? (
    <>
      <p>
        Good: <span>{good}</span>
      </p>
      <p>
        Neutral: <span>{neutral}</span>
      </p>
      <p>
        Bad: <span>{bad}</span>
      </p>
      <p>
        Total: <span>{total}</span>
      </p>
      <p>
        Positive feedback:<span> {positivePercentage}</span>
      </p>
    </>
  ) : (
    <Notification message="No feedback given" />
  );
};

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;