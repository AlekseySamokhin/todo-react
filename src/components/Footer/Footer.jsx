import styles from "./Footer.module.css";

const Footer = (props) => {
  const { todos } = props;

  return (
    <div className={styles.footer}>
      <span className={styles.todoCount}>
        {todos.length > 1 ? `${todos.length} items ` : `${todos.length} item `}
        left
      </span>
      <ul className={styles.filterList}>
        <li className={styles.filterItem}>All</li>
        <li className={styles.filterItem}>Active</li>
        <li className={styles.filterItem}>Completed</li>
      </ul>
    </div>
  );
};

export default Footer;
