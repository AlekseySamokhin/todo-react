import { useState } from "react";

import { AiOutlinePlusCircle } from "react-icons/ai";

import { v4 as uuidv4 } from "uuid";

import styles from "./InputTask.module.css";

const InputTask = (props) => {
  const { todos, setTodos } = props;

  const [value, setValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTask(e);
    }
  };

  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();

    if (value.trim() !== "") {
      const newTask = {
        title: value.trim(),
        completed: false,
        id: uuidv4(),
      };

      setTodos([...todos, newTask]);

      setValue("");
    } else {
      alert("Добавь, пожалуйста, текст задачи!");
    }
  };

  return (
    <div className={styles.InputTask}>
      <input
        className={styles.InputTaskInput}
        placeholder="What needs to be done?"
        type="text"
        value={value}
        onKeyDown={handleKeyDown}
        onChange={handleChangeValue}
      />
      <button className={styles.InputTaskButton} onClick={handleAddTask}>
        <AiOutlinePlusCircle />
      </button>
    </div>
  );
};

export default InputTask;
