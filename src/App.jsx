import { useState, useEffect, useMemo } from "react";

import FormTodo from "./components/FormTodo";
import TodoList from "./components/TodoList";
import FilterButton from "./components/FilterButton";

import { FaRegCheckCircle } from "react-icons/fa";

import styles from "./App.module.css";

import filters from "./filters";

const App = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const memoizedDataTodos = useMemo(
    () => ({
      all: todos,
      active: todos.filter((todo) => !todo.completed),
      completed: todos.filter((todo) => todo.completed),
    }),
    [todos]
  );

  const createTodo = (title) => {
    title = title.trim();

    if (title !== "") {
      const newTodo = {
        title,
        completed: false,
        id: Date.now(),
      };

      setTodos([...todos, newTodo]);
    } else {
      alert("Добавь, пожалуйста, текст задачи!");
    }
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);

    setTodos(newTodos);
  };

  const editTodo = (id, title) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title };
      }

      return todo;
    });

    setTodos(newTodos);
  };

  const checkTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }

      return todo;
    });

    setTodos(newTodos);
  };

  return (
    <div className={styles.container}>
      <div className={styles.todos}>
        <div className={styles.header}>
          <FaRegCheckCircle className={styles.headerIcon} />
          <h1 className={styles.headerTitle}>Todo list</h1>
        </div>

        <div className={styles.main}>
          <FormTodo createTodo={createTodo} />
          <TodoList
            memoizedDataTodos={memoizedDataTodos}
            filter={filter}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            checkTodo={checkTodo}
          />
        </div>

        <div className={styles.footer}>
          <span className={styles.todoCount}>
            {todos.length > 1
              ? `${todos.length} items `
              : `${todos.length} item `}
            left
          </span>
          <div className={styles.todoFilter}>
            {Object.keys(filters).map((filter) => (
              <FilterButton
                key={filter}
                filter={filter}
                setFilter={setFilter}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
