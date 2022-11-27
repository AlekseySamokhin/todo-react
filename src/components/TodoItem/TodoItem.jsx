import { useState } from "react";

import { FiX } from "react-icons/fi";
import { BiPencil } from "react-icons/bi";

import styles from "./TodoItem.module.css";

const TodoItem = ({ todo, deleteTodo, editTodo, checkTodo }) => {
  const [isEditing, setIsEditing] = useState(false);

  const [input, setInput] = useState(todo.title);

  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  const handleDeleteTodo = () => {
    deleteTodo(todo.id);
  };

  const handleCheckTodo = () => {
    checkTodo(todo.id);
  };

  const handleEditTodo = () => {
    editTodo(todo.id, input);
  };

  const handleBlur = () => {
    editTodo(todo.id, input);
    setIsEditing(false);
  };

  const handleEditDone = (event) => {
    if (event.key === "Enter") {
      handleEditTodo();
      setIsEditing(false);
    }
  };

  return (
    <li className={styles.todoItem}>
      {!isEditing ? (
        <div
          className={styles.todoItemText}
          onDoubleClick={() => setIsEditing(true)}
        >
          <input
            className={styles.todoItemCheckbox}
            type="checkbox"
            checked={todo.completed}
            onChange={handleCheckTodo}
          />

          <h3 className={styles.todoItemTitle}>
            {todo.completed ? (
              <span className={styles.todoItemDone}>
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
          className={styles.todoInput}
          value={input}
          onChange={onChangeInput}
          onKeyDown={handleEditDone}
          onBlur={handleBlur}
          autoFocus
        />
      )}
      <div className={styles.todoItemButtons}>
        <button className={styles.todoItemEdit} onClick={() => setIsEditing(true)}>
          <BiPencil />
        </button>
        
        <button className={styles.todoItemDelete} onClick={handleDeleteTodo}>
          <FiX />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
