import { useState } from "react";

import { AiOutlinePlusCircle } from "react-icons/ai";

import styles from "./FormTodo.module.css";

const InputTask = (props) => {
  const { todos, setTodos } = props;

  const [value, setValue] = useState("");

  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();

    if (value.trim() !== "") {
      const newTask = {
        title: value.trim(),
        completed: false,
        id: Date.now(),
      };

      setTodos([...todos, newTask]);

      setValue("");
    } else {
      alert("Добавь, пожалуйста, текст задачи!");
    }
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
      <button className={styles.formTodoButton} onClick={handleAddTask}>
        <AiOutlinePlusCircle />
      </button>
    </form>
  );
};

export default InputTask;
