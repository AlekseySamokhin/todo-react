import { useState } from "react";

import { AiOutlinePlusCircle } from "react-icons/ai";

import styles from "./FormTodo.module.css";

const InputTask = ({ createTodo }) => {
  const [value, setValue] = useState("");

  const handleChangeValue = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    createTodo(value);

    setValue("");
  };

  return (
    <form className={styles.formTodo}>
      <input
        className={styles.formTodoInput}
        placeholder="What needs to be done?"
        type="text"
        value={value}
        onChange={handleChangeValue}
      />
      <button className={styles.formTodoButton} onClick={handleAddTodo}>
        <AiOutlinePlusCircle />
      </button>
    </form>
  );
};

export default InputTask;
