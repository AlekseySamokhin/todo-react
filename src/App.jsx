import { useState, useEffect } from "react";

import Todos from "./components/Todos";

import styles from "./App.module.css";

const TODOS_KEY = "todos";

function App() {
  const getStorageItem = () => {
    try {
      const storedItem = localStorage.getItem("todos");
      const parsedItem = JSON.parse(storedItem);

      return parsedItem || [];
    } catch {
      return [];
    }
  };

  const [todos, setTodos] = useState(getStorageItem);

  useEffect(() => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  }, [todos]);

  return (
    <div className={styles.container}>
      <Todos todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
