import { useState } from "react";

import FormTodo from "../FormTodo";
import TodoList from "../TodoList";

import styles from "./Main.module.css";

const Main = (props) => {
  const { todos, setTodos } = props;

  const [value, setValue] = useState("");

  return (
    <div className={styles.main}>
      <FormTodo
        value={value}
        setValue={setValue}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList value={value} todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Main;
