import { useState } from "react";

import { FiX } from "react-icons/fi";
import { BiPencil } from "react-icons/bi";

import styles from "./TodoItem.module.css";

const TodoItem = (props) => {
  const { todo, todos, setTodos } = props;

  const [isEditing, setIsEditing] = useState(false);

  const handleToggleEdit = () => setIsEditing(!isEditing);

  const handleDeleteTodo = (id) => {
    const removeTodo = todos.filter((todo) => todo.id !== id);

    setTodos(removeTodo);
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

  const handleUpdateTodo = (updateValue, id) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title: updateValue };
      }

      return todo;
    });

    setTodos(updateTodos);
  };

  const handleUpdateTodoDone = (e) => {
    if (e.key === "Enter") {
      setIsEditing(false);
    }
  };

  return (
    <li className={styles.TodoItem}>
      {!isEditing ? (
        <div className={styles.TodoItemText} onDoubleClick={handleToggleEdit}>
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
      ) : (
        <input
          type="text"
          className={styles.TodoInput}
          value={todo.title}
          onChange={(e) => {
            handleUpdateTodo(e.target.value, todo.id);
          }}
          onKeyDown={handleUpdateTodoDone}
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
