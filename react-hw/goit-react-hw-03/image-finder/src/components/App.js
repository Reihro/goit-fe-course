import React, { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import ButtonLoadMore from "./ButtonLoadMore/ButtonLoadMore.js";
import Loader from "react-loader-spinner";
import "./App.css";

import { request } from "./Api";

export default class App extends Component {
	state = {
		gallery: [],
		request: "",
		pagination: 1,
		isLoading: false,
		error: null,
	};

	fetchArticles = (value, pagination) => {
		this.setState({ isLoading: true });

		request(value, pagination)
			.then((response) => {
				if (pagination > 1) {
					this.setState({
						gallery: [...this.state.gallery, ...response.data.hits],
						request: value,
					});
				} else {
					this.setState({
						gallery: response.data.hits,
						request: value,
					});
				}
			})
			.finally(() => this.setState({ isLoading: false }));
	};

	setPagination = () => {
		const newPagination = this.state.pagination + 1;

		this.fetchArticles(this.state.request, newPagination);

		this.setState({
			pagination: newPagination,
		});
	};

	componentDidUpdate() {
		window.scrollTo({
			top: document.documentElement.scrollHeight,
			behavior: "smooth",
		});
	}

	render() {
		const { gallery, isLoading} = this.state;
		return (
			<div className="App">
				<Searchbar onSubmit={this.fetchArticles} />
				{gallery.length > 0 && <ImageGallery gallery={gallery} />}
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
				{gallery.length > 0 && (
					<ButtonLoadMore setPagination={this.setPagination} />
				)}
			</div>
		);
	}
}
