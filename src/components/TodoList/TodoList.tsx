import React, { useMemo, useEffect } from "react";

import TodoListItem from "../TodoListItem";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { getFilteredTodos } from "../../store/selector";
import { TodoListStyled } from "./TodoList.styled";
import { getTodosThunk, clearCompletedTodoThunk } from "../../store/actionsThunk/todoThunk";

const TodoList: React.FC = () => {
  const dispatch = useAppDispatch();

  const { todos, todosFilter } = useAppSelector((state) => state.todoList);

  const todosFiltered = useAppSelector(getFilteredTodos);

  const lengthCompletedTodos = useMemo(
    () => todos.filter((todo) => todo.completed).length,
    [todos]
  );

  const handleClearCompleted = () => {
    dispatch(clearCompletedTodoThunk());
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
      </ul>

      {!todosFiltered.length && (
        <h3 className="todoList__empty">
          {todosFilter} todos for today is empty...
        </h3>
      )}

      {!!lengthCompletedTodos && (
        <button className="clearCompletedButton" onClick={handleClearCompleted}>
          Clear completed
        </button>
      )}
    </TodoListStyled>
  );
};

export default TodoList;
