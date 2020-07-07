import React from "react";

const style = {
  width: 200,
};

const SearchForm = ({ value, onChangeFilter }) => (
  <input
    type="text"
    value={value}
    onChange={onChangeFilter}
    placeholder="Find contact by name"
    style={style}
  />
);

export default SearchForm;