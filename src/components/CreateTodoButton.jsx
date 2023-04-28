import React from "react";
import "../styles/CreateTodoButton.css";

function CreateTodoButton() {
  const onClickAgregarTodo = () => {
    console.log(`Todo Terminada`);
  };
  return (
    <button onClick={onClickAgregarTodo} className="CreateTodoButton">
      +
    </button>
  );
}

export { CreateTodoButton };
