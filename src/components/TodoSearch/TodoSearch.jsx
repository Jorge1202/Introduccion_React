import React from "react";
import "./TodoSearch.css";
function TodoSearch({ search, setSearch }) {
  const onChangeSearch = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  };

  return (
    <input
      onChange={onChangeSearch}
      className="TodoSearch"
      placeholder="Cebolla"
      value={search}
    />
  );
}

export { TodoSearch };
