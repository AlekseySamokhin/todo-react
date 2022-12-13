import React, { useMemo } from "react";

// hooks
import { useAppDispatch, useAppSelector } from "../../store/hooks";

// types
import type { FilterTypes } from "../../store/types";

// action
import { filterSelected } from "../../store/todoSlice";

// styles
import { StyledButton, TodoFooterStyles } from "./TodoFooter.styled"

const buttonsFiltersNames: FilterTypes[] = ["all", "active", "completed"];

const TodoFooter: React.FC = () => {
  const dispatch = useAppDispatch();

  const { todos, todosFilter } = useAppSelector((state) => state.todoList);

  const countFilteredTodos = useMemo(
    () => ({
      all: todos.length,
      active: todos.filter((todo) => !todo.completed).length,
      completed: todos.filter((todo) => todo.completed).length,
    }),
    [todos]
  );

  const checkFilter = (filter: FilterTypes) => {
    dispatch(filterSelected(filter));
  };

  return (
    <TodoFooterStyles>
      {
        buttonsFiltersNames.map(filterName => (
          <StyledButton
          key={filterName} 
          filter={filterName}
          todosFilter={todosFilter}
          onClick={() => checkFilter(filterName)}
        >
          {filterName} {countFilteredTodos[filterName]}
        </StyledButton>
        ))
      }
    </TodoFooterStyles>
  );
};

export default TodoFooter;
