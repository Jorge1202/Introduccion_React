import React from "react";
import { TodoContext } from "../../Context/TodoContext";
import "./CreateTodoButton.css";

function CreateTodoButton() {
  const { setOpenModal } = React.useContext(TodoContext);

  const onClickAgregarTodo = () => {
    setOpenModal(prevState => !prevState); //optenemos el estado actal de setOpenModal y ese lo negamos  
  };

  return (
    <button onClick={onClickAgregarTodo} className="CreateTodoButton">
      +
    </button>
  );
}

export { CreateTodoButton };
