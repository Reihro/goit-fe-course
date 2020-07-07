import React from "react";
import { CSSTransition } from "react-transition-group";
import popTransition from "../../Transitions/pop.module.css";

const style = {
  width: 300,
  padding: 8,
  marginTop: 10,
};

const SearchForm = ({ contacts, filter, filteredString }) => (
  <CSSTransition
    timeout={250}
    classNames={popTransition}
    in={contacts.length > 2 || filter ? true : false}
    unmountOnExit
  >
    <div style={style} className="searchForm">
      <label>
        Find contacts by name
        <input
          title="Search"
          onChange={(e) => filteredString(e.target.value)}
          placeholder="Enter name"
          type="text"
        />
      </label>
    </div>
    ;
  </CSSTransition>
);

export default SearchForm;