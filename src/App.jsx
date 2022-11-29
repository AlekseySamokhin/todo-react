import React, { useEffect } from "react";

import { useSelector } from "react-redux";

import { FaRegCheckCircle } from "react-icons/fa";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";

import { filterTodos } from "./store/selector";

import styles from "./App.module.css";

const App = () => {
  const todos = useSelector(filterTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const countTodos =
    todos.length >= 1 ? `${todos.length} items` : `${todos.length} item`;

  return (
    <div className={styles.container}>
      <div className={styles.todos}>
        <div className={styles.header}>
          <div className={styles.headerMain}>
            <FaRegCheckCircle className={styles.headerIcon} />

            <h1 className={styles.headerTitle}>Todo List</h1>
          </div>

          <div className={styles.headerCount}>{countTodos} left</div>
        </div>

        <div className={styles.main}>
          <TodoForm />

          <TodoList />
        </div>

        <TodoFooter />
      </div>
    </div>
  );
};

export default App;
