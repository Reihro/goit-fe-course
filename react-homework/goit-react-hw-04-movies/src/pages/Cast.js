import React, { Component } from "react";
import Loader from "react-loader-spinner";
import CastList from "../components/Movie/CastList/CastList";
import * as MoviesAPI from "../components/API";

export default class Cast extends Component {
  state = { cast: [], isLoading: false };

  componentDidMount() {
    this.setState({ isLoading: true });
    const { movieId } = this.props.match.params;
    MoviesAPI.getMovieCredits(movieId).then(({ cast }) =>
      this.setState({ isLoading: false, cast })
    );
  }

  render() {
    const { cast } = this.state;
    return this.state.isLoading ? (
      <Loader
        type="Hearts"
        color="rgba(218,209,77,.836)"
        height={80}
        width={100}
        timeout={10000}
        className="Loader"
      />
    ) : (
      <CastList cast={cast} />
    );
  }
}