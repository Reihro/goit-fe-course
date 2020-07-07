import React, { Component, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import Loader from "react-loader-spinner";
import MovieCard from "../components/Movie/MovieCard/MovieCard";
import * as MoviesAPI from "../components/API";
const AsyncReviews = lazy(() => import("./Reviews"));

const AsyncCast = lazy(() => import("./Cast"));

export default class MovieDetailsPage extends Component {
  state = { movie: null, isLoading: false };

  componentDidMount() {
    this.setState({ isLoading: true });
    const { movieId } = this.props.match.params;
    if (movieId) {
      MoviesAPI.getMovieById(movieId).then((movie) =>
        this.setState({ isLoading: false, movie })
      );
    }
  }

  handleGoBackBtn = () => {
    const { history, location } = this.props;
    if (location.state) {
      return history.push(location.state.from);
    }
    history.push("/movies");
  };

  render() {
    const { movie } = this.state;
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
      <div>
        {movie && <MovieCard movie={movie} onGoBack={this.handleGoBackBtn} />}
        <Suspense
          fallback={
            <Loader
              type="Hearts"
              color="rgba(218,209,77,.836)"
              height={80}
              width={100}
              timeout={10000}
              className="Loader"
            />
          }
        >
          <Route
            path={`${this.props.match.path}/reviews`}
            component={AsyncReviews}
          />
          <Route path={`${this.props.match.path}/cast`} component={AsyncCast} />
        </Suspense>
      </div>
    );
  }
}