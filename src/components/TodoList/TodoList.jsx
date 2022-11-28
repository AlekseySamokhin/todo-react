import React, { useMemo } from "react";

import TodoItem from "../TodoItem/TodoItem";

import styles from "./TodoList.module.css";

import { getShowTodo } from "../../store/selector";

import { useSelector } from "react-redux";

const TodoList = ({
  filter,
  deleteTodo,
  editTodo,
  checkTodo,
  clearCompletedTodo,
}) => {
  const todoList = useSelector(getShowTodo);

  const lengthCompletedTodos = useMemo(
    () => todoList.filter((todo) => todo.completed).length,
    [todoList]
  );

  const handleClearCompleted = () => {
    clearCompletedTodo();
  };

  return (
    <div className={styles.todoList}>
      <ul className={styles.todoListSheet}>
        {todoList.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            checkTodo={checkTodo}
          />
        ))}
      </ul>
      {todoList.length === 0 && (
        <h3 className={styles.todoListEmpty}>
          {filter} todos for today is empty...
        </h3>
      )}
      {lengthCompletedTodos !== 0 && (
        <button
          className={styles.clearCompletedButton}
          onClick={handleClearCompleted}
        >
          Clear completed
        </button>
      )}
    </div>
  );
};

export default TodoList;
