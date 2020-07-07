import React from "react";

import Input from "./Input";
import style from "./SearchForm.module.css";
import { CSSTransition } from "react-transition-group";
import popTransition from "../../Transition/pop.module.css";

const SearchForm = ({ value, handleChange, toggle }) => (
	<CSSTransition
		timeout={250}
		classNames={popTransition}
		in={toggle}
		unmountOnExit
	>
		<div className={style.searchForm}>
    <label className={style.title}>Find contacts</label>
			<Input className={style.input}
				title="Find contacts by name"
        value={value}
        type="text"
				handleChange={handleChange}
				placeholder="Enter name"
			/>
		</div>
	</CSSTransition>
);

export default SearchForm;
