import React, { useState } from "react";

// icons components
import { FiX } from "react-icons/fi";
import { BiPencil } from "react-icons/bi";

// hooks
import { useAppDispatch } from "../../store/hooks";

// actions
import { todoDeleted, todoEdited, todoCompleted } from "../../store/todoSlice";

// types
import { TodoItem } from "../../store/types";

// styles
import styles from "./TodoListItem.module.css";

type Props = {
  todo: TodoItem;
};

const TodoListItem: React.FC<Props> = ({ todo }) => {
  const { title, completed, id } = todo;
  const dispatch = useAppDispatch();

  const [isEditing, setIsEditing] = useState<boolean>(false);

  const [input, setInput] = useState<string>(title);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleDeleteTodo = () => {
    dispatch(todoDeleted(id));
  };

  const handleCheckTodo = () => {
    dispatch(todoCompleted(id));
  };

  const handleEditTodo = () => {
    if (input === "") {
      dispatch(todoDeleted(id));
    } else {
      dispatch(todoEdited({ id, title: input }));
    }
  };

  const handleBlur = () => {
    dispatch(todoEdited({ id, title: input }));
    setIsEditing(false);
  };

  const handleEditDone = (e: React.KeyboardEvent<HTMLInputElement>) => {
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
