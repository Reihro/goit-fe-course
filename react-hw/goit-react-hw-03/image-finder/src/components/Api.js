import axios from "axios";

const KEY = "15294616-b60013c29755464c1efffd134";

export const request = (value, pagination) => {
	return axios.get(
		"https://pixabay.com/api/?key=" + KEY +`&q=${value}&image_type=photo&per_page=12&page=${pagination}`
	);
};
