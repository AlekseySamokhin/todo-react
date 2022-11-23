import FormTodo from "../FormTodo";
import TodoList from "../TodoList";

import styles from "./Main.module.css";

const Main = (props) => {
  const { todos, filter, createTodo, deleteTodo, editTodo, checkTodo } = props;

  return (
    <div className={styles.main}>
      <FormTodo createTodo={createTodo} />
      <TodoList
        filter={filter}
        todos={todos}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        checkTodo={checkTodo}
      />
    </div>
  );
};

export default Main;
