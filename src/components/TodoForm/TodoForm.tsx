import React, { useState } from "react";

import styled from "styled-components";

// icons components
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";

// hooks
import { useAppSelector, useAppDispatch } from "../../store/hooks";

// action
import { todoAdded, allCompleted } from "../../store/todoSlice";

// styles
import TodoFormStyles from "./TodoForm.styles";


const CheckAllIcon = styled(AiOutlineCheckCircle)<{isCompletedAll: boolean}>`
  font-size: 30px;

  color: ${({isCompletedAll}) => (isCompletedAll ? "rgb(209, 202, 202)" : "#3d3a3a")};
`;

const TodoForm: React.FC = () => {
  const [input, setInput] = useState<string>("");

  const { isCompletedAll, todos } = useAppSelector((state) => state.todoList);

  const dispatch = useAppDispatch();

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (input.trim() !== "") {
      dispatch(todoAdded(input));

      setInput("");
    }
  };

  const handleCheckAllTodo = () => {
    dispatch(allCompleted());
  };

  return (
    <TodoFormStyles onSubmit={handleAddTodo}>
      {todos.length !== 0 && (
        <button className="formTodo__checkAll" onClick={handleCheckAllTodo}>
          <CheckAllIcon isCompletedAll={isCompletedAll} />
        </button>
      )}

      <input
        className="formTodo__input"
        placeholder="What needs to be done?"
        type="text"
        value={input}
        onChange={onInputChange}
      />

      <button className="formTodo__btn">
        <AiOutlinePlusCircle />
      </button>
    </TodoFormStyles>
  );
};

export default TodoForm;
