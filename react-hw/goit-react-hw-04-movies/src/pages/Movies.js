import React, { Component } from "react";
import Pagination from "@material-ui/lab/Pagination";
import Loader from "react-loader-spinner";
import queryString from "query-string";
import NotFound from "./NotFound";
import MoviesList from "../components/Search/MoviesList/MoviesList";
import SearchField from "../components/Search/SearchField/SearchField";
import * as MoviesAPI from "../components/API";

const getQueryFromLocation = (location) =>
  queryString.parse(location.search).query;

const getPageFromLocation = (location) =>
  queryString.parse(location.search).page;

export default class MoviesPage extends Component {
  state = {
    movies: [],
    isLoading: false,
    totalPages: 0,
    activePage: 1,
  };

  componentDidMount() {
    let activePage = getPageFromLocation(this.props.location);
    activePage = activePage ? Number(activePage) : 1;

    this.setState({ activePage }, this.fetchData);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location !== this.props.location) {
      this.fetchData();
    }
  }

  fetchData = () => {
    const query = getQueryFromLocation(this.props.location);
    if (query) {
      this.setState({ isLoading: true });
      MoviesAPI.getMoviesByQuery(query, this.state.activePage).then((data) => {
        this.setState({
          isLoading: false,
          totalPages: data.total_pages,
          movies: data.results,
        });
      });
    }
  };

  handlePageChange = (obj, pageNumber) => {
    const query = getQueryFromLocation(this.props.location);
    const searchPage = pageNumber === 1 ? "" : `&page=${pageNumber}`;
    this.props.history.push({
      path: "/movies",
      search: `?query=${query}${searchPage}`,
    });
    this.setState({ activePage: pageNumber });
  };

  render() {
    const { movies, isLoading, totalPages } = this.state;
    const query = getQueryFromLocation(this.props.location);
    return (
      <>
        <SearchField />

        {isLoading && (
          <Loader
            type="Hearts"
            color="rgba(218,209,77,.836)"
            height={80}
            width={100}
            timeout={10000}
            className="Loader"
          />
        )}

        {movies.length > 0 && query ? (
          <div>
            <MoviesList movies={movies} />
            <Pagination
              count={totalPages}
              page={this.state.activePage}
              onChange={this.handlePageChange}
              style={{ display: "flex", justifyContent: "center" }}
            />
          </div>
        ) : (
          !isLoading &&
          query && <NotFound message="Sorry nothing matches your request" />
        )}
      </>
    );
  }
}