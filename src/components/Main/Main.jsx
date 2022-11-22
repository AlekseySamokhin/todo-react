import FormTodo from "../FormTodo";
import TodoList from "../TodoList";

import styles from "./Main.module.css";

const Main = (props) => {
  const { todos, setTodos } = props;

  return (
    <div className={styles.main}>
      <FormTodo todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Main;
