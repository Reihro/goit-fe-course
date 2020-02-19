const Url = "https://restcountries.eu/rest/v2";
const name = "/name/";
export default {
  fetchCountry(searchQuery) {
    return fetch(Url + name + searchQuery)
      .then(function(response) {
        if (response.ok) {
          return response.json();
        } else {
          let data = [];
          return data;
        }
      })
      .catch(error => {
        return error;
      });
  }
};