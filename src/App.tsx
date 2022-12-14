import React, { useMemo } from "react";

import { FaRegCheckCircle } from "react-icons/fa";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";

import { useAppSelector } from "./store/hooks";
import { getFilteredTodos } from "./store/selector";

// import { saveTodoItemsToLocalStorage } from "./store/useLocalStorage";

import StylesTodos from "./App.styles";

const App: React.FC = () => {
  const todos = useAppSelector(getFilteredTodos);

  const taskCounter = useMemo(() => {
    if (todos.length === 0) {
      return `No item left`;
    }

    if (todos.length === 1) {
      return `${todos.length} item left`;
    }

    return `${todos.length} items left`;
  }, [todos]);

  return (
    <StylesTodos>
      <div className="todos">
        <div className="header">
          <div className="header__wrapper">
            <FaRegCheckCircle className="header__icon" />

            <h1 className="header__title">Todo List</h1>
          </div>

          <div className="header__count">{taskCounter}</div>
        </div>

        <div className="todos__body">
          <TodoForm />

          <TodoList />
        </div>

        <TodoFooter />
      </div>
    </StylesTodos>
  );
};

export default App;
