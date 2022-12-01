import React, { useMemo } from "react";

// components
import TodoListItem from "../TodoListItem";

// hooks
import { useAppSelector, useAppDispatch } from "../../store/hooks";

import { getFilteredTodos } from "../../store/selector";

// action
import { compeletedCleared } from "../../store/todoSlice";

// styles
import styles from "./TodoList.module.css";

const TodoList: React.FC = () => {
  const { todos, todosFilter } = useAppSelector((state) => state.todoList);

  const todosList = useAppSelector(getFilteredTodos);

  console.log(todos);

  const dispatch = useAppDispatch();

  const lengthCompletedTodos = useMemo(
    () => todosList.filter((todo) => todo.completed).length,
    [todosList]
  );

  console.log(lengthCompletedTodos);

  const handleClearCompleted = () => {
    dispatch(compeletedCleared());
  };

  return (
    <div className={styles.todoList}>
      <ul className={styles.todoListSheet}>
        {todosList.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </ul>
      {todosList.length === 0 && (
        <h3 className={styles.todoListEmpty}>
          {todosFilter} todos for today is empty...
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
