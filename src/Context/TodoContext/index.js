import React from "react";
import { useLocalStoraje } from "./useLocalStoraje";

const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    item: todos,
    saveItem: saveTodo,
    load,
    error,
  } = useLocalStoraje("ListTodos", []);

  const [openModal, setOpenModal] = React.useState(false);
  const completedTodos = todos.filter((x) => x.completed).length;
  const totalTodos = todos.length;

  const [search, setSearch] = React.useState("");  
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
      const todoIndex = todos.findIndex((todo) => todo.text === item.text);
      const newTodos = [...todos];
      newTodos[todoIndex].completed = true;
      saveTodo(newTodos);
    }
  };

  const addTodo = (text) => {
    if (text) {
      const newTodos = [...todos];
      let obj = {
        completed: false,
        text
      }
      newTodos.push(obj)
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
    <TodoContext.Provider
      value={{
        completedTodos,
        totalTodos,
        search,
        setSearch,

        openModal,
        setOpenModal,
        addTodo,

        error,
        load,
        listTodos,
        onCompleteTodo,
        onDeleteTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
