import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";

import styles from "./FormTodo.module.css";

const InputTask = ({ value, onChangeValue, createTodo, checkTodoAll, isDoneAll }) => {
  const handleAddTodo = (e) => {
    e.preventDefault();
    createTodo(value);
  };

  const handleCheckAllTodo = (e) => {
    checkTodoAll();
  }

  return (
    <form className={styles.formTodo}>
      <div className={styles.checkAll} onClick={handleCheckAllTodo}>
        <AiOutlineCheckCircle className={isDoneAll ? styles.checkAllIcon : styles.checkAllIconActive}/>
      </div>
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
