import React, { useState } from "react";

import styled from "styled-components";

// icons components
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";

// hooks
import { useAppSelector, useAppDispatch } from "../../store/hooks";

// action thunk
import {
  createTodoThunk,
  completedAllTodo,
} from "../../store/actionsThunk/todoThunk";

// styles
import TodoFormStyles from "./TodoForm.styles";

const CheckAllIcon = styled(AiOutlineCheckCircle)<{ complete: boolean }>`
  font-size: 30px;

  color: ${({ complete }) => (complete ? "rgb(209, 202, 202)" : "#3d3a3a")};
`;

const TodoForm: React.FC = () => {
  const [text, setText] = useState<string>("");

  const { isCompletedAll, todos } = useAppSelector((state) => state.todoList);

  const dispatch = useAppDispatch();

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!text.trim()) {
      return;
    }

    dispatch(createTodoThunk(text));
    setText("");
  };

  const handleCheckAllTodo = () => {
    console.log("asagasgasaasasasgas");
    dispatch(completedAllTodo(isCompletedAll));
  };

  return (
    <TodoFormStyles onSubmit={handleAddTodo}>
      {!!todos.length && (
        <button className="formTodo__checkAll" onClick={handleCheckAllTodo}>
          <CheckAllIcon complete={isCompletedAll} />
        </button>
      )}

      <input
        className="formTodo__input"
        placeholder="What needs to be done?"
        type="text"
        value={text}
        onChange={onInputChange}
      />

      <button className="formTodo__btn">
        <AiOutlinePlusCircle />
      </button>
    </TodoFormStyles>
  );
};

export default TodoForm;
