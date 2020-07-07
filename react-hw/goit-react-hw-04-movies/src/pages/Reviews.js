import React, { Component } from "react";
import Loader from "react-loader-spinner";
import ReviewsList from "../components/Movie/ReviewsList/ReviewsList";
import * as MoviesAPI from "../components/API";

export default class Reviews extends Component {
  state = { reviews: [], isLoading: false };

  componentDidMount() {
    this.fetchReviews();
  }

  fetchReviews = () => {
    this.setState({ isLoading: true });
    const { movieId } = this.props.match.params;
    if (movieId) {
      MoviesAPI.getMovieReviews(movieId).then((reviews) =>
        this.setState({ isLoading: false, reviews })
      );
    }
  };

  render() {
    const { reviews, isLoading } = this.state;
    return isLoading ? (
      <Loader
        className="loader"
        type="TailSpin"
        color="#01d277"
        height={100}
        width={100}
        timeout={3000}
      />
    ) : (
      <ReviewsList reviews={reviews} />
    );
  }
}