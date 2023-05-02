import React from "react";
import { TodoContext } from "../../Context/TodoContext";
import "./TodoSearch.css";
function TodoSearch() {
  const {search, setSearch} = React.useContext(TodoContext)

  const onChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      value={search}
      onChange={onChangeSearch}
    />
  );
}

export { TodoSearch };
