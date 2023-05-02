import React from "react";
import { TodoContext } from "../../Context/TodoContext";
import "./CreateTodoButton.css";

function CreateTodoButton() {
  const { openModal, setOpenModal } = React.useContext(TodoContext);

  const onClickAgregarTodo = () => {
    setOpenModal(!openModal);
  };

  return (
    <button onClick={onClickAgregarTodo} className="CreateTodoButton">
      +
    </button>
  );
}

export { CreateTodoButton };
