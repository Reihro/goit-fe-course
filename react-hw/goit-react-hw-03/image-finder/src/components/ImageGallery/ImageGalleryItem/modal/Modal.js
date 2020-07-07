import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Modal.css";

export default class Modal extends Component {
	state = {};

static propTypes = {
		src: PropTypes.string.isRequired,
		clickState: PropTypes.func.isRequired,
		alt: PropTypes.string,
	};

componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.code !== 'Escape') return;
    this.props.clickState();
  };

  handleOverlayClick = e => {
    if (this.overlayRef && this.overlayRef !== e.target) return;
    this.props.clickState();
  };

  render() {
    const { src, alt } = this.props;
    return (
      <div
        className={"Overlay"}
        ref={this.overlayRef}
        onClick={this.handleOverlayClick}
      >
        <div className={"Modal"} id="Modal" onClick={this.handleKeyPress}><img src={src} alt={alt} /></div>
      </div>
    );
  }
}