export default {
  fetchCountry(searchQuery) {
    return fetch("https://restcountries.eu/rest/v2/name/" + searchQuery)
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