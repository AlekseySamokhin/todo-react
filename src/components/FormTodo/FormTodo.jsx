import { AiOutlinePlusCircle } from "react-icons/ai";

import styles from "./FormTodo.module.css";

const InputTask = ({ value, onChangeValue, createTodo }) => {
  const handleAddTodo = (e) => {
    e.preventDefault();
    createTodo(value);
  };

  return (
    <form className={styles.formTodo}>
      <input
        className={styles.formTodoInput}
        placeholder="What needs to be done?"
        type="text"
        value={value}
        onChange={onChangeValue}
      />
      <button className={styles.formTodoButton} onClick={handleAddTodo}>
        <AiOutlinePlusCircle />
      </button>
    </form>
  );
};

export default InputTask;
