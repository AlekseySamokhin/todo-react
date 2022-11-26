import { useState } from "react";

import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";

import styles from "./FormTodo.module.css";

const InputTask = ({ createTodo, checkTodoAll, isDoneAll, memoizedTodos }) => {
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
    checkTodoAll();
  }

  return (
    <form className={styles.formTodo}>
      <div className={styles.checkAll} onClick={handleCheckAllTodo}>
        {
          memoizedTodos.all.length !== 0 && 
          (<AiOutlineCheckCircle className={isDoneAll ? styles.checkAllIcon : styles.checkAllIconActive} />)
        }
      </div>
      <input
        className={styles.formTodoInput}
        placeholder="What needs to be done?"
        type="text"
        value={input}
        onChange={onInputChange}
      />
      <button className={styles.formTodoButton} onClick={handleAddTodo}>
        <AiOutlinePlusCircle />
      </button>
    </form>
  );
};

export default InputTask;
