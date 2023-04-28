import React from "react";
import "./CreateTodoButton.css";

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
