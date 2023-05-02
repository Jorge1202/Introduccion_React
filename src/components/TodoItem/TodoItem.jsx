import React from "react";
import "./TodoItem.css";
function TodoItem({completed, onCompleteTodo, text,onDeleteTodo}) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
        onClick={onCompleteTodo}
      >
        √
      </span>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <span onClick={onDeleteTodo} className="Icon Icon-delete">
        X
      </span>
    </li>
  );
}

export { TodoItem };
