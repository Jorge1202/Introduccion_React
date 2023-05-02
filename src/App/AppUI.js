import React from "react";
import { TodoContext } from "../Context/TodoContext";

import { CreateTodoButton } from "../components/CreateTodoButton/CreateTodoButton";
import { TodoCounter } from "../components/TodoCounter/TodoCounter";
import { TodoItem } from "../components/TodoItem/TodoItem";
import { TodoList } from "../components/TodoList/TodoList";
import { TodoSearch } from "../components/TodoSearch/TodoSearch";

function AppUI() {
  const {
    error,
    load,
    listTodos,
    onCompleteTodo,
    onDeleteTodo,
  } = React.useContext(TodoContext);
  
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <p>Desespérate, hubo un error...</p>}
        {load &&<p>Cargando...</p>}
        {(!load && !listTodos.length) && <p>¡Crea tu primer TODO!</p>}
        


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


      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };