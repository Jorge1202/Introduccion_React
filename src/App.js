import React from "react";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";

const Defaulttodos = [
  { text: "Texto 1", completed: true },
  { text: "cebolla 2", completed: false },
  { text: "tarea 3", completed: false },
  { text: "cuatro 4", completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(Defaulttodos);
  const [search, setSearch] = React.useState("");

  const completedTodos = todos.filter((x) => x.completed).length;
  const totalTodos = todos.length;

  let listTodos = [];
  if (search.length === 0) {
    listTodos = todos;
  } else {
    listTodos = todos.filter((todo) => {
      let totoText = todo.text.toLowerCase();
      let textSearch = search.toLowerCase();
      return totoText.includes(textSearch);
    });
  }

  return (
    <>
      <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />

      <TodoSearch search={search} setSearch={setSearch} />
      <TodoList>
        {listTodos.map((item) => (
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
