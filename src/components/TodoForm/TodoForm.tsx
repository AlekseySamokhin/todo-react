import React, { useState } from "react";

// icons components
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";

// hooks
import { useAppSelector, useAppDispatch } from "../../store/hooks";

// action
import { todoAdded, allCompleted } from "../../store/todoSlice";

// styles
import styles from "./TodoForm.module.css";

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
    <form className={styles.formTodo} onSubmit={handleAddTodo}>
      {todos.length !== 0 && (
        <div className={styles.checkAll} onClick={handleCheckAllTodo}>
          <AiOutlineCheckCircle
            className={`${styles.checkAllIcon} ${
              isCompletedAll ? "" : styles.active
            }`}
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
