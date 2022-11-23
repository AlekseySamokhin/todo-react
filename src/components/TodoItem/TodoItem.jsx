import { useState } from "react";

import { FiX } from "react-icons/fi";
import { BiPencil } from "react-icons/bi";

import styles from "./TodoItem.module.css";

const TodoItem = ({ todo, deleteTodo, editTodo, checkTodo }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleToggleEdit = () => setIsEditing(!isEditing);

  const handleEditDone = (event) => {
    if (event.key === "Enter") {
      setIsEditing(false);
    }
  };

  const handleDeleteTodo = (id) => {
    deleteTodo(id);
  };

  const handleCheckTodo = (id) => {
    checkTodo(id);
  };

  const handleEditTodo = (id, title) => {
    editTodo(id, title);
  };

  return (
    <li className={styles.TodoItem}>
      {!isEditing ? (
        <div className={styles.TodoItemText} onDoubleClick={handleToggleEdit}>
          <input
            className={styles.TodoItemCheckbox}
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleCheckTodo(todo.id)}
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
      ) : (
        <input
          type="text"
          className={styles.TodoInput}
          value={todo.title}
          onChange={(e) => {
            handleEditTodo(todo.id, e.target.value);
          }}
          onKeyDown={handleEditDone}
          autoFocus
        />
      )}
      <div className={styles.TodoItemButtons}>
        <button className={styles.TodoItemEdit} onClick={handleToggleEdit}>
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
