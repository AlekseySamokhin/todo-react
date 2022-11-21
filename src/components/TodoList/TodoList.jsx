import TodoItem from "../TodoItem";

import styles from "./TodoList.module.css";

const TodoList = () => {
  return (
    <div className={styles.TodoList}>
      <ul className={styles.TodoListSheet}>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
    </div>
  );
};

export default TodoList;
