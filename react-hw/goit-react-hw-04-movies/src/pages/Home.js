import React, { Component } from "react";
import Loader from "react-loader-spinner";
import MoviesList from "../components/Search/MoviesList/MoviesList";
import * as MoviesAPI from "../components/API";

export default class HomePage extends Component {
  state = { movies: [], isLoading: false };

  componentDidMount() {
    this.setState({ isLoading: true });
    MoviesAPI.getTrending().then((movies) =>
      this.setState({ isLoading: false, movies })
    );
  }

  render() {
    const { movies, isLoading } = this.state;
    return (
      <>
        <h1>Trending today</h1>
        {isLoading ? (
          <Loader
            type="Hearts"
            color="rgba(218,209,77,.836)"
            height={80}
            width={100}
            timeout={10000}
            className="Loader"
          />
        ) : (
          <MoviesList movies={movies} />
        )}
      </>
    );
  }
}
