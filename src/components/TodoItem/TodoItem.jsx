import { useState } from "react";

import { FiX } from "react-icons/fi";
import { BiPencil } from "react-icons/bi";

import styles from "./TodoItem.module.css";

const TodoItem = (props) => {
  const [checked, setChecked] = useState(false);

  const { todo, todos, setTodos } = props;

  const handleChangeBox = () => {
    setChecked(!checked);
    
    
  };

  const handleDeleteTodo = (id) => {
    const removeTodo = todos.filter((todo) => todo.id !== id);

    setTodos(removeTodo);
  };

  return (
    <li id={todo.id} className={styles.TodoItem}>
      <label className={styles.TodoItemLabel}>
        <input
          className={styles.TodoItemCheckbox}
          type="checkbox"
          defaultChecked={checked}
          onClick={handleChangeBox}
        />
        <h3 className={styles.TodoItemTitle}>{todo.title}</h3>
      </label>
      <div className={styles.TodoItemButtons}>
        <button className={styles.TodoItemEdit}>
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
