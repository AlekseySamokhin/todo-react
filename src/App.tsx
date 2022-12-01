import React, { useEffect } from "react";

// icons component
import { FaRegCheckCircle } from "react-icons/fa";

// components
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";

// hooks
import { useAppSelector } from "./store/hooks";

// selector
import { getFilteredTodos } from "./store/selector";

// use local-storage
import { saveTodoItemsToLocalStorage } from "./store/useLocalStorage";

// styles
import styles from "./App.module.css";

const App: React.FC = () => {
  const todos = useAppSelector(getFilteredTodos);

  useEffect(() => {
    saveTodoItemsToLocalStorage(todos);
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