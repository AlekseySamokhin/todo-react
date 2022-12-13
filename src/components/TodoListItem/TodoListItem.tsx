import React, { useState } from "react";

// icons components
import { FiX } from "react-icons/fi";
import { BiPencil } from "react-icons/bi";

// hooks
import { useAppDispatch } from "../../store/hooks";

// actions
// import { todoDeleted, todoEdited, todoCompleted } from "../../store/todoSlice";

// types
import { ITodoItem } from "../../store/types";

// styles
import { TodoItemBtn, TodoListItemStyles } from "./TodoListItem.styled";

import {
  deleteTodoThunk,
  updateTodoThunk,
} from "../../store/actionsThunk/todoThunk";

// type
type TodoListItemProps = {
  todo: ITodoItem;
};

const TodoListItem: React.FC<TodoListItemProps> = (props) => {
  const { todo } = props;

  const dispatch = useAppDispatch();

  const [isEditing, setIsEditing] = useState<boolean>(false);

  const [text, setText] = useState<string>(todo.title);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodoThunk(id));
  };

  const handleCheckTodo = () => {
    dispatch(
      updateTodoThunk({
        id: todo.id,
        title: text,
        completed: !todo.completed,
      })
    );
  };

  const handleEditTodo = () => {
    if (!text) return dispatch(deleteTodoThunk(todo.id));

    dispatch(
      updateTodoThunk({
        id: todo.id,
        title: text,
        completed: todo.completed,
      })
    );
  };

  const handleBlur = () => {
    dispatch(
      updateTodoThunk({
        id: todo.id,
        title: text,
        completed: todo.completed,
      })
    );

    setIsEditing(false);
  };

  const handleEditDone = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleEditTodo();

      setIsEditing(false);
    }
  };

  return (
    <TodoListItemStyles>
      {!isEditing ? (
        <div
          className="todoItem__text"
          onDoubleClick={() => setIsEditing(true)}
        >
          <input
            className="todoItem__checkbox"
            type="checkbox"
            checked={todo.completed}
            onChange={handleCheckTodo}
          />

          <h3 className="todoItem__title">
            <span className={todo.completed ? "todoItem__done" : ""}>
              {todo.title}
            </span>
          </h3>
        </div>
      ) : (
        <input
          type="text"
          className="todoItem__input"
          value={text}
          onChange={onChangeInput}
          onKeyDown={handleEditDone}
          onBlur={handleBlur}
          autoFocus
        />
      )}
      <div className="todoItem__buttons">
        <TodoItemBtn onClick={() => setIsEditing(true)}>
          <BiPencil />
        </TodoItemBtn>

        <TodoItemBtn onClick={() => handleDeleteTodo(todo.id)}>
          <FiX />
        </TodoItemBtn>
      </div>
    </TodoListItemStyles>
  );
};

export default TodoListItem;
