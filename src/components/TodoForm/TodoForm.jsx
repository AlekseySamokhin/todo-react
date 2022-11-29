import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";

import { filterTodos } from "../../store/selector";

import { todoAdded, allCompleted } from "../../store/todoSlice";

import styles from "./TodoForm.module.css";

const TodoForm = () => {
  const dispatch = useDispatch();

  const isCompletedAll = useSelector((state) => state.todos.isCompletedAll);

  const todos = useSelector(filterTodos);

  const [input, setInput] = useState("");

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddTodo = (e) => {
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
    <form className={styles.formTodo} onSubmit={handleAddTodo}>
      {todos.length !== 0 && (
        <div className={styles.checkAll} onClick={handleCheckAllTodo}>
          <AiOutlineCheckCircle
            className={
              isCompletedAll ? styles.checkAllIcon : styles.checkAllIconActive
            }
          />
        </div>
      )}

      <input
        className={styles.formTodoInput}
        placeholder="What needs to be done?"
        type="text"
        value={input}
        onChange={onInputChange}
      />

      <button className={styles.formTodoButton}>
        <AiOutlinePlusCircle />
      </button>
    </form>
  );
};

export default TodoForm;
