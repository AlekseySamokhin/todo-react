import { useState } from "react";

import { FiX } from "react-icons/fi";
import { BiPencil } from "react-icons/bi";

import styles from "./TodoItem.module.css";

const TodoItem = ({ todo, deleteTodo, editTodo, checkTodo }) => {
  const [todoValue, setValueTodo] = useState(todo.title);

  const [isEditing, setIsEditing] = useState(false);

  const handleDeleteTodo = () => {
    deleteTodo(todo.id);
  };

  const handleCheckTodo = () => {
    checkTodo(todo.id);
  };

  const handleEditTodo = () => {
    editTodo(todo.id, todoValue);
    setIsEditing(true);
  };

  const changeInputTodo = (e) => {
    setValueTodo(e.target.value);
  };

  const handleBlur = () => {
    editTodo(todo.id, todoValue);
    setIsEditing(false);
  };

  const handleEditDone = (event) => {
    if (event.key === "Enter") {
      handleEditTodo();
      setIsEditing(false);
    }
  };

  return (
    <li className={styles.TodoItem}>
      {!isEditing ? (
        <div
          className={styles.TodoItemText}
          onDoubleClick={() => setIsEditing(true)}
        >
          <input
            className={styles.TodoItemCheckbox}
            type="checkbox"
            checked={todo.completed}
            onChange={handleCheckTodo}
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
          value={todoValue}
          onChange={changeInputTodo}
          onKeyDown={handleEditDone}
          onBlur={handleBlur}
          autoFocus
        />
      )}
      <div className={styles.TodoItemButtons}>
        <button className={styles.TodoItemEdit} onClick={handleEditTodo}>
          <BiPencil />
        </button>
        <button className={styles.TodoItemDelete} onClick={handleDeleteTodo}>
          <FiX />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
