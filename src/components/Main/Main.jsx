import InputTask from "../InputTask";
import TodoList from "../TodoList/TodoList";

import styles from "./Main.module.css";

const Main = (props) => {
  const { todos, setTodos } = props;

  return (
    <div className={styles.main}>
      <InputTask todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Main;
