import styles from "./Footer.module.css";

const Footer = (props) => {
  const { todos, filterList } = props;

  return (
    <div className={styles.footer}>
      <span className={styles.todoCount}>
        {todos.length > 1 ? `${todos.length} items ` : `${todos.length} item `}
        left
      </span>
      <div className={styles.todoFilter}>{filterList}</div>
    </div>
  );
};

export default Footer;
