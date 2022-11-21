import TodoItem from "../TodoItem/TodoItem";

import styles from "./TodoList.module.css";

const TodoList = (props) => {
  const { todos, setTodos } = props;

  return (
    <div className={styles.TodoList}>
      <ul className={styles.TodoListSheet}>
        {todos.map((item) => (
          <TodoItem
            key={item.id}
            todo={item}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
      {todos.length === 0 && (
        <h3 className={styles.TodoListEmpty}>Todo List for today is empty...</h3>
      )}
    </div>
  );
};

export default TodoList;
