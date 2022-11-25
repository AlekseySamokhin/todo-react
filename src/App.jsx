import { useState, useEffect, useMemo } from "react";

import { v4 as uuidv4 } from "uuid";

import FormTodo from "./components/FormTodo";
import TodoList from "./components/TodoList";

import FilterButtons from "./components/FilterButtons";

import { FaRegCheckCircle } from "react-icons/fa";

import styles from "./App.module.css";

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
        id: uuidv4(),
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
    if (title.trim() === "") {
      deleteTodo(id);
    } else {
      const newTodos = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title };
        }

        return todo;
      });

      setTodos(newTodos);
    }
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
          <div className={styles.todoCount}>
            {memoizedDataTodos[filter].length > 1
              ? `${memoizedDataTodos[filter].length} items `
              : `${memoizedDataTodos[filter].length} item `}
            left
          </div>
          <div className={styles.headerMain}>
            <FaRegCheckCircle className={styles.headerIcon} />
            <h1 className={styles.headerTitle}>Todo list</h1>
          </div>
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
          <FilterButtons
            memoizedDataTodos={memoizedDataTodos}
            filter={filter}
            setFilter={setFilter}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
