import styles from "./FilterButtons.module.css";

const FilterButtons = ({ filter, selectFilter, memoizedTodos }) => {
  const buttonsFilters = [
    { title: "all", count: memoizedTodos.all.length },
    { title: "active", count: memoizedTodos.active.length },
    { title: "completed", count: memoizedTodos.completed.length },
  ];

  const handleFilter = (filter) => {
    selectFilter(filter);
  };

  return (
    <div className={styles.filterTodos}>
      {buttonsFilters.map((button) => (
        <button
          key={button.title}
          type="button"
          className={
            button.title === filter
              ? styles.filterButtonActive
              : styles.filterButton
          }
          onClick={() => handleFilter(button.title)}
        >
          {button.title} {button.count}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
