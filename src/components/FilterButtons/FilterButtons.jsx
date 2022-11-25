import styles from "./FilterButtons.module.css";

const FilterButtons = ({ filter, checkFilter, todosMemo }) => {
  const buttonsFilters = [
    { title: "all", count: todosMemo.all.length },
    { title: "active", count: todosMemo.active.length },
    { title: "completed", count: todosMemo.completed.length },
  ];

  const handleFilter = (filter) => {
    checkFilter(filter);
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
