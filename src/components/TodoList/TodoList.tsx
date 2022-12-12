import React, { useMemo, useEffect } from "react";

// components
import TodoListItem from "../TodoListItem";

// hooks
import { useAppSelector, useAppDispatch } from "../../store/hooks";

// action
import { compeletedCleared } from "../../store/todoSlice";

// selector
import { getFilteredTodos } from "../../store/selector";

// styles
import { TodoListStyled } from "./TodoList.styled";

import { getTodosThunk } from "../../store/actionsThunk/todoThunk";

const TodoList: React.FC = () => {
  const dispatch = useAppDispatch();

  const { todos, todosFilter } = useAppSelector((state) => state.todoList);

  const todosFiltered = useAppSelector(getFilteredTodos);

  const lengthCompletedTodos = useMemo(
    () => todos.filter((todo) => todo.completed).length,
    [todos]
  );

  const handleClearCompleted = () => {
    dispatch(compeletedCleared());
  };

  useEffect(() => {
    dispatch(getTodosThunk());
  }, [dispatch]);

  return (
    <TodoListStyled>
      <ul className="todoList__sheet">
        {todosFiltered.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
        {/* {todos.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} />
        ))} */}
      </ul>
      {todosFiltered.length === 0 && (
        <h3 className="todoList__empty">
          {todosFilter} todos for today is empty...
        </h3>
      )}
      {lengthCompletedTodos !== 0 && (
        <button className="clearCompletedButton" onClick={handleClearCompleted}>
          Clear completed
        </button>
      )}
    </TodoListStyled>
  );
};

export default TodoList;
