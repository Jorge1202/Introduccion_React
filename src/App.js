import React from "react";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";

const todos = [
  { text: "Texto 1", completed: true },
  { text: "Texto 2", completed: false },
  { text: "Texto 3", completed: false },
  { text: "Texto 4", completed: false },
];

function App() {
  return (
    <>
      <TodoCounter />

      <TodoSearch />
      <TodoList>
        {todos.map((item) => (
          <TodoItem
            key={item.text}
            text={item.text}
            completed={item.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
