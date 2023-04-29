import React from "react";
import { TodoContext, TodoProvider } from "../Context/TodoContext";

import { CreateTodoButton } from "../components/CreateTodoButton/CreateTodoButton";
import { TodoCounter } from "../components/TodoCounter/TodoCounter";
import { TodoItem } from "../components/TodoItem/TodoItem";
import { TodoList } from "../components/TodoList/TodoList";
import { TodoSearch } from "../components/TodoSearch/TodoSearch";

function App() {
  return (
    <TodoProvider>
      <TodoCounter />
      <TodoSearch />

      <TodoContext.Consumer>
        {({ error, load, listTodos, onCompleteTodo, onDeleteTodo }) => (
          <TodoList>
            {error && <p>Error </p>}
            {load && <p>Cargando ... </p>}
            {!listTodos.length && !load && <p>Crea tu primera tarea</p>}
            {listTodos.map((item) => (
              <TodoItem
                key={item.text}
                text={item.text}
                completed={item.completed}
                onComplete={() => onCompleteTodo(item)}
                onDeleteTodo={() => onDeleteTodo(item)}
              />
            ))}
          </TodoList>
        )}
      </TodoContext.Consumer>

      <CreateTodoButton />
    </TodoProvider>
  );
}

export default App;
