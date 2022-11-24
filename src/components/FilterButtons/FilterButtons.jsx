import styles from "./FilterButtons.module.css";

const FilterButtons = ({ filter, setFilter, memoizedDataTodos }) => {
  const buttonsFilters = [
    { title: "all", count: memoizedDataTodos.all.length },
    { title: "active", count: memoizedDataTodos.active.length },
    { title: "completed", count: memoizedDataTodos.completed.length },
  ];

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
          onClick={() => setFilter(button.title)}
        >
          {button.title} {button.count}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
