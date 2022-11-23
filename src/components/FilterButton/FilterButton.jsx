import styles from "./FilterButton.module.css";

const FilterButton = (props) => {
  const { name, changeFilter, isPressed } = props;

  const handleChangeFilter = (name) => {
    changeFilter(name);
  };

  return (
    <button
      type="button"
      className={styles.filterButton}
      aria-pressed={isPressed}
      onClick={() => handleChangeFilter(name)}
    >
      <span>{name}</span>
    </button>
  );
};

export default FilterButton;
