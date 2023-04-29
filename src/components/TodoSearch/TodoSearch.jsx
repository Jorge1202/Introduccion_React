import React from "react";
import { TodoContext } from "../../Context/TodoContext";
import "./TodoSearch.css";
function TodoSearch() {
  const {search, setSearch} = React.createContext(TodoContext)

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
