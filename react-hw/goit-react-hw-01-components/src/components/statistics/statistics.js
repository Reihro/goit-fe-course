import React from "react";
import PropTypes from "prop-types";
import style from "../statistics/statistics.module.css";

const Statistics = ({ title = "Upload stats%", stats = [] }) => {
  const colorArr = ["#4fc4f6", "#a33cf2", "#e64c65", "#21b8c6", "#a33ca4"];
  return (
    <section className={style.statistics}>
      <h2>{title}</h2>

      <ul>
        {stats.map((items, index) => (
          <li
            key={items.id}
            style={{
            backgroundColor: colorArr[index],
            }}
          >
            <span>{items.label}</span>
            <span>{items.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;