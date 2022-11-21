import styles from "./Footer.module.css";

const Footer = () => {

  return (
    <div className={styles.footer}>
      <span className={styles.todoCount}>0 items left</span>
      <ul className={styles.filterList}>
        <li className={styles.filterItem}>All</li>
        <li className={styles.filterItem}>Active</li>
        <li className={styles.filterItem}>Completed</li>
      </ul>
    </div>
  );
};

export default Footer;
