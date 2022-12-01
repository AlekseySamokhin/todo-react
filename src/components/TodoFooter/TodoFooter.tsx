import React, { useMemo } from "react";

// hooks
import { useAppDispatch, useAppSelector } from "../../store/hooks";

// types
import type { FilterTypes } from "../../store/types";

// action
import { filterSelected } from "../../store/todoSlice";

// styles
import styles from "./TodoFooter.module.css";

const TodoFooter: React.FC = () => {
  const dispatch = useAppDispatch();

  const { todos, todosFilter } = useAppSelector((state) => state.todoList);

  const lengthFilteredTodos = useMemo(
    () => ({
      all: todos.length,
      active: todos.filter((todo) => !todo.completed).length,
      completed: todos.filter((todo) => todo.completed).length,
    }),
    [todos]
  );

  const checkFilter = (filter: FilterTypes) => {
    dispatch(filterSelected(filter));
  };

  return (
    <div className={styles.footer}>
      <button
        type="button"
        className={`${styles.filterButton} ${
          todosFilter === "all" ? styles.active : ""
        }`}
        onClick={() => checkFilter("all")}
      >
        all {lengthFilteredTodos["all"]}
      </button>
      <button
        type="button"
        className={`${styles.filterButton} ${
          todosFilter === "active" ? styles.active : ""
        }`}
        onClick={() => checkFilter("active")}
      >
        active {lengthFilteredTodos["active"]}
      </button>
      <button
        type="button"
        className={`${styles.filterButton} ${
          todosFilter === "completed" ? styles.active : ""
        }`}
        onClick={() => checkFilter("completed")}
      >
        completed {lengthFilteredTodos["completed"]}
      </button>
    </div>
  );
};

export default TodoFooter;
