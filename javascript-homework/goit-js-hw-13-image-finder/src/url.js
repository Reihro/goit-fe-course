export default {
  page: 1,
  query: "",
  fetchImages() {
    const KEY = "15294616-b60013c29755464c1efffd134";
    const request = "&q=" + this.query + "&page=" + this.page + "&per_page=12";
    const URL = "https://pixabay.com/api/?key=" + KEY + request;
    return fetch(URL).then(response =>
      response.json().then(parse => {
        this.icrementPage();
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
  icrementPage() {
    this.page += 1;
  },
  resetPage() {
    this.page = 1;
  }
};