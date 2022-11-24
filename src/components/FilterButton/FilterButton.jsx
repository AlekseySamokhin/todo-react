import styles from "./FilterButton.module.css";

const FilterButton = ({ filter, setFilter }) => {
  return (
    <button
      type="button"
      className={styles.filterButton}
      onClick={() => setFilter(filter)}
    >
      {filter}
    </button>
  );
};

export default FilterButton;
