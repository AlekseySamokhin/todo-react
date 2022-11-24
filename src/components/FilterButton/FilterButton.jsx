import styles from "./FilterButton.module.css";

const FilterButton = (props) => {
  const { filter, changeFilter } = props;

  const handleChangeFilter = (filter) => {
    changeFilter(filter);
  };

  return (
    <button
      type="button"
      className={styles.filterButton}
      onClick={() => handleChangeFilter(filter)}
    >
      {filter}
    </button>
  );
};

export default FilterButton;
