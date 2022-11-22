import { FiX } from "react-icons/fi";
import { BiPencil } from "react-icons/bi";

import styles from "./TodoItem.module.css";

const TodoItem = (props) => {
  const { todo, todos, setTodos } = props;

  const handleDeleteTodo = (id) => {
    const removeTodo = todos.filter((todo) => todo.id !== id);

    setTodos(removeTodo);
  };

  const handleEditTodo = (id) => {
    console.log("Edit!");
  };

  const handleChangeBoxTodo = (id) => {
    const checkTodo = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }

      return todo;
    });

    setTodos(checkTodo);
  };

  return (
    <li className={styles.TodoItem}>
      <div
        className={styles.TodoItemText}
        onDoubleClick={() => handleEditTodo(todo.id)}
      >
        <input
          className={styles.TodoItemCheckbox}
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleChangeBoxTodo(todo.id)}
        />
        <h3 className={styles.TodoItemTitle}>
          {todo.completed ? (
            <span style={{ textDecoration: "line-through", color: "#000" }}>
              {todo.title}
            </span>
          ) : (
            <span>{todo.title}</span>
          )}
        </h3>
      </div>
      <div className={styles.TodoItemButtons}>
        <button
          className={styles.TodoItemEdit}
          onClick={() => handleEditTodo(todo.id)}
        >
          <BiPencil />
        </button>
        <button
          className={styles.TodoItemDelete}
          onClick={() => handleDeleteTodo(todo.id)}
        >
          <FiX />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
