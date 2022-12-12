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

const TodoListItem: React.FC<TodoListItemProps> = ({ todo }) => {
  const { title, completed, id } = todo;

  const dispatch = useAppDispatch();

  const [isEditing, setIsEditing] = useState<boolean>(false);

  const [input, setInput] = useState<string>(title);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodoThunk(id));
  };

  const handleCheckTodo = () => {
    dispatch(updateTodoThunk({ id, title: input, completed: !completed }));
  };

  const handleEditTodo = () => {
    if (input === "") {
      dispatch(deleteTodoThunk(id));
    } else {
      dispatch(updateTodoThunk({ id, title: input, completed }));
    }
  };

  const handleBlur = () => {
    dispatch(updateTodoThunk({ id, title: input, completed }));
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
            checked={completed}
            onChange={handleCheckTodo}
          />

          <h3 className="todoItem__title">
            <span className={completed ? "todoItem__done" : ""}>{title}</span>
          </h3>
        </div>
      ) : (
        <input
          type="text"
          className="todoItem__input"
          value={input}
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

        <TodoItemBtn onClick={() => handleDeleteTodo(id)}>
          <FiX />
        </TodoItemBtn>
      </div>
    </TodoListItemStyles>
  );
};

export default TodoListItem;
