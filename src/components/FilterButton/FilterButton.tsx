import { useMemo } from "react";

import { useSelector, useDispatch } from "react-redux";

import { filterSelected } from "../../store/todoSlice";

import styles from "./FilterButton.module.css";

const FilterButton: React.FC = ({ filter }) => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos.todoList);

  const currentFilter = useSelector((state) => state.todos.isFiltered);

  const lengthFilteredTodos = useMemo(
    () => ({
      all: todos.length,
      active: todos.filter((todo) => !todo.completed).length,
      completed: todos.filter((todo) => todo.completed).length,
    }),
    [todos]
  );

  const checkFilter = (filter) => {
    dispatch(filterSelected(filter));
  };

  return (
    <button
      type="button"
      className={`${styles.filterButton} ${
        currentFilter === filter ? styles.active : ""
      }`}
      onClick={() => checkFilter(filter)}
    >
      {filter} {lengthFilteredTodos[filter]}
    </button>
  );
};

export default FilterButton;
