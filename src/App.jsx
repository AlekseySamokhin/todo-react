import { useState, useEffect } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import styles from "./App.module.css";

const App = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className={styles.container}>
      <div className={styles.todos}>
        <Header />
        <Main todos={todos} setTodos={setTodos} />
        <Footer todos={todos} />
      </div>
    </div>
  );
};

export default App;
