import React from "react";
import "../styles/TodoSearch.css";
function TodoSearch() {
  const onChangeSearch = (event) => {
    console.log(event.target.value);
  };

  return (
    <input
      onChange={onChangeSearch}
      className="TodoSearch"
      placeholder="Cebolla"
    />
  );
}

export { TodoSearch };
