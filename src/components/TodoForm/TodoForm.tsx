import React, { useState } from "react";

import { AiOutlinePlusCircle } from "react-icons/ai";

import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { createTodoThunk, toggleStatusTodoThunk } from "../../store/actionsThunk/todoThunk";
import TodoFormStyles from "./TodoForm.styles";
import { CheckAllIcon } from "./TodoForm.styles";
import { filterSelected } from "../../store/todoSlice";

const TodoForm: React.FC = () => {
  const [text, setText] = useState<string>("");

  const dispatch = useAppDispatch();

  const { todos, todosFilter } = useAppSelector((state) => state.todoList);

  const statusTodos: boolean = React.useMemo(() => {
    const completedTodos = todos.filter((todo) => todo.completed);

    const completed = completedTodos.length !== todos.length;

    const changeStatusTodos = todos.map((todo) => ({
      ...todo,
      completed,
    }));

    return changeStatusTodos.some((todo) => todo.completed);
  }, [todos]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (todosFilter === "completed") {
      dispatch(filterSelected("active"));
    }

    if (!text.trim()) {
      return;
    }

    dispatch(createTodoThunk(text));

    setText("");
  };

  const handleCheckAllTodo = () => {
    dispatch(toggleStatusTodoThunk(statusTodos));
  };

  return (
    <TodoFormStyles onSubmit={handleAddTodo}>
      {!!todos.length && (
        <button className="formTodo__checkAll" onClick={handleCheckAllTodo}>
          <CheckAllIcon complete={!statusTodos} />
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
