import React, { useMemo } from "react";

import { useSelector, useDispatch } from "react-redux";

import styles from "./FilterButtons.module.css";

const FilterButtons = ({ filter, selectFilter }) => {
  const showFiltered = useSelector((state) => state.todos.filter);

  const todoList = useSelector((state) => state.todos.todoList);

  const memoizedTodos = useMemo(
    () => ({
      all: todoList,
      active: todoList.filter((todo) => !todo.completed),
      completed: todoList.filter((todo) => todo.completed),
    }),
    [todoList]
  );

  const dispatch = useDispatch();

  const handleFilter = (filter) => {
    dispatch(selectFilter(filter));
  };

  return (
    <div className={styles.filterTodos}>
      <button
        type="button"
        className={
          showFiltered === "all"
            ? styles.filterButtonActive
            : styles.filterButton
        }
        onClick={() => handleFilter("all")}
      >
        All {memoizedTodos.all.length}
      </button>
      <button
        type="button"
        className={
          showFiltered === "active"
            ? styles.filterButtonActive
            : styles.filterButton
        }
        onClick={() => handleFilter("active")}
      >
        Active {memoizedTodos.active.length}
      </button>
      <button
        type="button"
        className={
          showFiltered === "completed"
            ? styles.filterButtonActive
            : styles.filterButton
        }
        onClick={() => handleFilter("completed")}
      >
        Completed {memoizedTodos.completed.length}
      </button>
    </div>
  );
};

export default FilterButtons;
