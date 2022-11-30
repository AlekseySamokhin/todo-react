import { useState, ChangeEvent, KeyboardEvent } from "react";

import { useDispatch } from "react-redux";

import { FiX } from "react-icons/fi";
import { BiPencil } from "react-icons/bi";

import { TodoItem } from "../../store/types";

import { todoDeleted, todoEdited, todoCompleted } from "../../store/todoSlice";

import styles from "./TodoListItem.module.css";

const TodoListItem: React.FC = ({ todo: { title, id, completed } }) => {
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);

  const [input, setInput] = useState(title);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleDeleteTodo = () => {
    dispatch(todoDeleted(id));
  };

  const handleCheckTodo = () => {
    dispatch(todoCompleted(id));
  };

  const handleEditTodo = () => {
    dispatch(todoEdited({ id, title: input }));
  };

  const handleBlur = () => {
    dispatch(todoEdited({ id, title: input }));
    setIsEditing(false);
  };

  const handleEditDone = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
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
            checked={completed}
            onChange={handleCheckTodo}
          />

          <h3 className={styles.todoItemTitle}>
            <span className={completed ? styles.todoItemDone : ""}>
              {title}
            </span>
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
        <button
          className={styles.todoItemEdit}
          onClick={() => setIsEditing(true)}
        >
          <BiPencil />
        </button>

        <button className={styles.todoItemDelete} onClick={handleDeleteTodo}>
          <FiX />
        </button>
      </div>
    </li>
  );
};

export default TodoListItem;
