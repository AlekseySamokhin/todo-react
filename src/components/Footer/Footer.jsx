import styles from "./Footer.module.css";

import filters from "../../filters";
import FilterButton from "../FilterButton/FilterButton";

const Footer = (props) => {
  const { todos, changeFilter } = props;

  return (
    <div className={styles.footer}>
      <span className={styles.todoCount}>
        {todos.length > 1 ? `${todos.length} items ` : `${todos.length} item `}
        left
      </span>
      <div className={styles.todoFilter}>
        {Object.keys(filters).map((name) => (
          <FilterButton key={name} name={name} changeFilter={changeFilter} />
        ))}
      </div>
    </div>
  );
};

export default Footer;
