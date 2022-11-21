import Header from "../Header";
import Main from "../Main/Main";
import Footer from "../Footer";

import styles from "./Todos.module.css";
import React from "react";

const Todos = (props) => {
  const { todos, setTodos } = props;

  return (
    <div className={styles.todos}>
      <Header />
      <Main todos={todos} setTodos={setTodos} />
      <Footer todos={todos}/>
    </div>
  );
};

export default Todos;
