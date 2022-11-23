import { useState, useEffect } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import FilterButton from "./components/FilterButton";

import styles from "./App.module.css";

const LOCAL_STORAGE_KEY = "todos";

const FILTER_MAP = {
  All: () => true,
  Active: (todo) => !todo.completed,
  Completed: (todo) => todo.completed,
};

const App = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
  );

  const [filter, setFilter] = useState("All");

  const filterList = Object.keys(FILTER_MAP).map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  return (
    <div className={styles.container}>
      <div className={styles.todos}>
        <Header />
        <Main
          todos={todos}
          filterMap={FILTER_MAP}
          filter={filter}
          setTodos={setTodos}
        />
        <Footer filterList={filterList} todos={todos} />
      </div>
    </div>
  );
};

export default App;
