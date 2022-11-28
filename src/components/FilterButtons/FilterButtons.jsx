import React, { useMemo } from "react";

import { useSelector, useDispatch } from "react-redux";

import styles from "./FilterButtons.module.css";

const FilterButtons = ({ checkFilter }) => {
  const todos = useSelector((state) => state.todos.todoList);

  const lengthFilteredTodos = useMemo(
    () => ({
      all: todos.length,
      active: todos.filter((todo) => !todo.completed).length,
      completed: todos.filter((todo) => todo.completed).length,
    }),
    [todos]
  );

  const dispatch = useDispatch();

  const currentFilter = useSelector((state) => state.todos.filter);

  const handleChangeFilter = (filter) => {
    dispatch(checkFilter(filter));
  };

  return (
    <div className={styles.filterTodos}>
      <button
        type="button"
        className={
          currentFilter === "all"
            ? styles.filterButtonActive
            : styles.filterButton
        }
        onClick={() => handleChangeFilter("all")}
      >
        All {lengthFilteredTodos.all}
      </button>
      <button
        type="button"
        className={
          currentFilter === "active"
            ? styles.filterButtonActive
            : styles.filterButton
        }
        onClick={() => handleChangeFilter("active")}
      >
        Active {lengthFilteredTodos.active}
      </button>
      <button
        type="button"
        className={
          currentFilter === "completed"
            ? styles.filterButtonActive
            : styles.filterButton
        }
        onClick={() => handleChangeFilter("completed")}
      >
        Completed {lengthFilteredTodos.completed}
      </button>
    </div>
  );
};

export default FilterButtons;
