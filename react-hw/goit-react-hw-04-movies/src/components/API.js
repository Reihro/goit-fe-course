import axios from "axios";

const KEY = "98ece17c6d461e449fe9f712b8a7c646";

export function getTrending() {
  return axios
    .get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`)
    .then((response) => response.data.results);
}

export function getMovieById(id) {
  return axios
    .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}`)
    .then((response) => response.data);
}

export function getMoviesByQuery(query, page = 1) {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${query}&page=${page}&include_adult=false&language=en-US`
    )
    .then((response) => response.data);
}

export function getMovieCredits(id) {
  return axios
    .get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}`)
    .then((response) => response.data);
}

export function getMovieReviews(id) {
  return axios
    .get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}`)
    .then((response) => response.data.results);
}
