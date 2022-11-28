import React, { useEffect } from "react";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";

import { getShowTodo } from "./store/selector";

import { useSelector, useDispatch } from "react-redux";

import {
  addTodo,
  removeTodo,
  changeTodo,
  toggleTodo,
  toggleTodoAll,
  deleteCompletedTodo,
  selectShowedFiltered,
} from "./store/todoSlice";

import { FaRegCheckCircle } from "react-icons/fa";

import styles from "./App.module.css";

import { v4 as uuidv4 } from "uuid";

const App = () => {
  const getTodosList = useSelector(getShowTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(getTodosList));
  }, [getTodosList]);

  const dispatch = useDispatch();

  // Done
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

      dispatch(addTodo(newTodo));
    } else {
      alert("Добавь, пожалуйста, текст задачи!"); // TODO: add block
    }
  };

  // Done
  const deleteTodo = (id) => {
    dispatch(removeTodo(id));
  };

  // Done
  const editTodo = (id, title) => {
    if (title.trim() === "") {
      deleteTodo(id);
    } else {
      dispatch(changeTodo({ id, title }));
    }
  };

  // Done
  const checkTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  // Done
  const checkTodoAll = () => {
    dispatch(toggleTodoAll());
  };

  // Done
  const selectFilter = (filter) => {
    dispatch(selectShowedFiltered(filter));
  };

  const clearCompletedTodo = () => {
    dispatch(deleteCompletedTodo());
  };

  const lengthFilterTodos = getTodosList.length;

  const countTodos =
    lengthFilterTodos >= 1
      ? `${lengthFilterTodos} items`
      : `${lengthFilterTodos} item`;

  return (
    <div className={styles.container}>
      <div className={styles.todos}>
        <div className={styles.header}>
          <div className={styles.headerMain}>
            <FaRegCheckCircle className={styles.headerIcon} />
            <h1 className={styles.headerTitle}>Todo list</h1>
          </div>

          <div className={styles.headerCount}>{countTodos} left</div>
        </div>

        <div className={styles.main}>
          <TodoForm checkTodoAll={checkTodoAll} createTodo={createTodo} />

          <TodoList
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            checkTodo={checkTodo}
            clearCompletedTodo={clearCompletedTodo}
          />
        </div>

        <div className={styles.footer}>
          <FilterButtons selectFilter={selectFilter} />
        </div>
      </div>
    </div>
  );
};

export default App;
