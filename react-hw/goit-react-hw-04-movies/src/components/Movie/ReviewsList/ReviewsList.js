import React from "react";
import PropTypes from "prop-types";
import NotFound from "../../../pages/NotFound";
import styles from "./ReviewsList.module.css";

const ReviewsList = ({ reviews }) => (
  <>
    {reviews.length > 0 && (
      <ul className={styles.reviewsList}>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <p>{content}</p>
            <h3>
              <span>Author:</span> {author}
            </h3>
          </li>
        ))}
      </ul>
    )}
    {reviews.length === 0 && <NotFound message="No reviews found" />}
  </>
);

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ReviewsList;
