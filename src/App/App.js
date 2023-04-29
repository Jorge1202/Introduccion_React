import React from "react";
import { CreateTodoButton } from "../components/CreateTodoButton/CreateTodoButton";
import { TodoCounter } from "../components/TodoCounter/TodoCounter";
import { TodoItem } from "../components/TodoItem/TodoItem";
import { TodoList } from "../components/TodoList/TodoList";
import { TodoSearch } from "../components/TodoSearch/TodoSearch";
// import './App.css'

// const Defaulttodos = [
//   { text: "Texto 1", completed: true },
//   { text: "Cebolla 1", completed: false },
//   { text: "Tarea 1", completed: false },
//   { text: "Cuatro 1", completed: false },
// ];

function useLocalStoraje(itemName, initialValue) {
  const [load, setLoad] = React.useState(false);
  const [error, setError] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem = [];

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoad(false);
      } catch (error) {
        setError(error);
      }
    }, 2000);
  });

  const saveItem = (newItem) => {
    try {
      const stringItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  return { item, saveItem, load, error };
}

function App() {
  const {
    item: todos,
    saveItem: saveTodo,
    load,
    error,
  } = useLocalStoraje("ListTodos", []);
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

  const onCompleteTodo = (item) => {
    if (!item.completed) {
      console.log(item);
      const todoIndex = todos.findIndex((todo) => todo.text === item.text);
      const newTodos = [...todos];

      console.log(todoIndex);
      newTodos[todoIndex].completed = true;
      saveTodo(newTodos);
    }
  };

  const onDeleteTodo = (item) => {
    const todoIndex = todos.findIndex((todo) => todo.text === item.text);
    const newTodos = [...todos];

    newTodos.splice(todoIndex, 1);
    saveTodo(newTodos);
  };

  return (
    <>
      <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />

      <TodoSearch search={search} setSearch={setSearch} />
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

      <CreateTodoButton />
    </>
  );
}

export default App;
