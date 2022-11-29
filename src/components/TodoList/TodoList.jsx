import React, { useMemo } from "react";

import { useSelector, useDispatch } from "react-redux";

import { compeletedCleared } from "../../store/todoSlice";

import { filterTodos } from "../../store/selector";

import TodoListItem from "../TodoListItem";

import styles from "./TodoList.module.css";

const TodoList = ({ filter }) => {
  const todoList = useSelector(filterTodos);

  const dispatch = useDispatch();

  const lengthCompletedTodos = useMemo(
    () => todoList.filter((todo) => todo.completed).length,
    [todoList]
  );

  const handleClearCompleted = () => {
    dispatch(compeletedCleared());
  };

  return (
    <div className={styles.todoList}>
      <ul className={styles.todoListSheet}>
        {todoList.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} />
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
