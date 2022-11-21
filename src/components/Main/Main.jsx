import InputTask from "../InputTask";
import TodoList from "../TodoList";

import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className={styles.main}>
      <InputTask />
      <TodoList />
    </div>
  );
};

export default Main;
