export default {
  page: 1,
  query: "",
  fetchImages() {
    const KEY = "15294616-b60013c29755464c1efffd134";
    const URL = "https://pixabay.com/api/?key=" + KEY +`&q=${this.query}&page=${this.page}&per_page=12`;
    return fetch(URL).then(response =>
      response.json().then(parse => {
        this.page += 1;
        return parse.hits;
      })
    );
  },
  get searchQuery() {
    return this.query;
  },
  set searchQuery(string) {
    this.query = string;
  },
  resetPage() {
    this.page = 1;
  }
};