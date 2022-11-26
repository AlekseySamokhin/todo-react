import { v4 as uuidv4 } from "uuid";

import { useState, useEffect, useMemo } from "react";

import FormTodo from "./components/FormTodo";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";

import { FaRegCheckCircle } from "react-icons/fa";

import styles from "./App.module.css";

const App = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  
  const [isDoneAll, setIsDoneAll] = useState(todos.some(todo => todo.completed));

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const memoizedTodos = useMemo(
    () => ({
      all: todos,
      active: todos.filter((todo) => !todo.completed),
      completed: todos.filter((todo) => todo.completed),
    }),
    [todos]
  );

  const createTodo = (title) => {
    title = title.trim();

    if (title.length > 25) {
      alert("Напишите текст задачи покороче!"); // TODO: add block
    } else if (title !== "") {
      const newTodo = {
        title,
        completed: false,
        id: uuidv4(),
      };

      setTodos([...todos, newTodo]);
    } else {
      alert("Добавь, пожалуйста, текст задачи!"); // TODO: add block
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

  const checkTodoAll = () => {
    const newTodos = todos.map((todo) => {
      return {
        ...todo,
        completed: !isDoneAll,
      };
    });

    setTodos(newTodos);
    setIsDoneAll(!isDoneAll);
  }; 

  const selectFilter = (filter) => {
    setFilter(filter);
  };

  const clearCompletedTodo = () => {
    let newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  const lengthFilterTodos = memoizedTodos[filter].length;

  const countTodosCompleted = todos.filter((todo) => todo.completed).length;

  const countTodos = lengthFilterTodos >= 1 ? `${lengthFilterTodos} items` : `${lengthFilterTodos} item`;

  return (
    <div className={styles.container}>
      <div className={styles.todos}> 
        <div className={styles.header}>
          <div className={styles.todoCount}>{countTodos} left</div>

          <div className={styles.headerMain}>
            <FaRegCheckCircle className={styles.headerIcon} />
            <h1 className={styles.headerTitle}>Todo list</h1>
          </div>
        </div>

        <div className={styles.main}>
          <FormTodo
            memoizedTodos={memoizedTodos}
            isDoneAll={isDoneAll}
            checkTodoAll={checkTodoAll}
            createTodo={createTodo}
          />

          <TodoList
            memoizedTodos={memoizedTodos}
            filter={filter}
            countTodosCompleted={countTodosCompleted}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            checkTodo={checkTodo}
            clearCompletedTodo={clearCompletedTodo}
          />
        </div>

        <div className={styles.footer}>
          <FilterButtons
            memoizedTodos={memoizedTodos}
            filter={filter}
            selectFilter={selectFilter}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
