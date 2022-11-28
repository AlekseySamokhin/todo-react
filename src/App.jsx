import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { v4 as uuidv4 } from "uuid";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";

import { FaRegCheckCircle } from "react-icons/fa";

import {
  todoAdded,
  todoDeleted,
  todoEdited,
  todoCompleted,
  allCompleted,
  compeletedCleared,
  filterSelected,
} from "./store/todoSlice";

import { filterTodos } from "./store/selector";

import styles from "./App.module.css";

const App = () => {
  const todos = useSelector(filterTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const dispatch = useDispatch();

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

      dispatch(todoAdded(newTodo));
    } else {
      alert("Добавь, пожалуйста, текст задачи!"); // TODO: add block
    }
  };

  const deleteTodo = (id) => {
    dispatch(todoDeleted(id));
  };

  const editTodo = (id, title) => {
    if (title.trim() === "") {
      deleteTodo(id);
    } else {
      dispatch(todoEdited({ id, title }));
    }
  };

  const doneTodo = (id) => {
    dispatch(todoCompleted(id));
  };

  const doneTodoAll = () => {
    dispatch(allCompleted());
  };

  const checkFilter = (filter) => {
    dispatch(filterSelected(filter));
  };

  const clearCompletedTodo = () => {
    dispatch(compeletedCleared());
  };

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
          <TodoForm doneTodoAll={doneTodoAll} createTodo={createTodo} />

          <TodoList
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            doneTodo={doneTodo}
            clearCompletedTodo={clearCompletedTodo}
          />
        </div>

        <TodoFooter checkFilter={checkFilter} />
      </div>
    </div>
  );
};

export default App;
