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
    debugger
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
