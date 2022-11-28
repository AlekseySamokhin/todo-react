import { useState } from "react";

import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";

import { useSelector } from "react-redux";
import { filterTodos } from "../../store/selector";

import styles from "./TodoForm.module.css";

const TodoForm = ({ createTodo, doneTodoAll }) => {
  const isDoneAll = useSelector((state) => state.todos.isDoneAll);

  const todos = useSelector(filterTodos);

  const [input, setInput] = useState("");

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();

    createTodo(input);

    setInput("");
  };

  const handleCheckAllTodo = (e) => {
    doneTodoAll();
  };

  return (
    <form className={styles.formTodo} onSubmit={handleAddTodo}>
      {todos.length !== 0 && (
        <div className={styles.checkAll} onClick={handleCheckAllTodo}>
          <AiOutlineCheckCircle
            className={
              isDoneAll ? styles.checkAllIcon : styles.checkAllIconActive
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
