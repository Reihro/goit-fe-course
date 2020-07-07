import React from "react";
import { CSSTransition } from "react-transition-group";
import ghostTransition from "../../Transitions/ghost.module.css";

const style = {
	top: 10,
	left: 120,
};

const AlertWindow = ({ alert, switchAlert }) => {
	return (
		<CSSTransition
			timeout={1000}
			classNames={ghostTransition}
			in={alert}
			onEnter={() => {
				setTimeout(() => {
					switchAlert(false);
				}, 1000);
			}}
			unmountOnExit
		>
			<div style={style} className="Alert">Contact already exists!</div>
		</CSSTransition>
	);
};

export default AlertWindow;
