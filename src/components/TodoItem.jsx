import React from "react";
import "../styles/TodoItem.css";
function TodoItem(props) {
  const onComplete = () => {
    console.log(`Todo Terminada ${props.text}`);
  };
  const onDelete = () => {
    console.log(`Todo Eliminada ${props.text}`);
  };

  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={onComplete}
      >
        √
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span onClick={onDelete} className="Icon Icon-delete">
        X
      </span>
    </li>
  );
}

export { TodoItem };
