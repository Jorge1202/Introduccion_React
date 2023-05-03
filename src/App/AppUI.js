import React from "react";
import { TodoContext } from "../Context/TodoContext";

import { CreateTodoButton } from "../components/CreateTodoButton/CreateTodoButton";
import { TodoCounter } from "../components/TodoCounter/TodoCounter";
import { TodoItem } from "../components/TodoItem/TodoItem";
import { TodoList } from "../components/TodoList/TodoList";
import { TodoSearch } from "../components/TodoSearch/TodoSearch";
import { Modal } from "../components/Modal";
import { TodoForm } from "../components/TodoForm"

import { TodosLoading } from "../components/TodosLoading";
import { TodosError } from "../components/TodosError";
import { TodosEmpty } from "../components/TodosEmpty";
 
function AppUI() {
  const {
    error,
    load,
    listTodos,
    onCompleteTodo,
    onDeleteTodo,
    openModal,
  } = React.useContext(TodoContext);
  
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <TodosError/>}
        {load && <TodosLoading/>}
        {(!load && !listTodos.length) && <TodosEmpty/>}
        
        {listTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onCompleteTodo={() => onCompleteTodo(todo)}
            onDeleteTodo={() => onDeleteTodo(todo)}
          />
        ))}
      </TodoList>

      {
        !!openModal && 
        <Modal>
          <TodoForm/>
        </Modal>
      }

      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };