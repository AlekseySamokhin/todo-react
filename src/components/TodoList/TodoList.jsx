import React, { useMemo } from "react";

import { useSelector } from "react-redux";

import TodoListItem from "../TodoListItem";

import { filterTodos } from "../../store/selector";

import styles from "./TodoList.module.css";

const TodoList = ({
  filter,
  deleteTodo,
  editTodo,
  doneTodo,
  clearCompletedTodo,
}) => {
  const todoList = useSelector(filterTodos);

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
          <TodoListItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            doneTodo={doneTodo}
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
