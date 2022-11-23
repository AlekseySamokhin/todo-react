import { useState, useEffect } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import styles from "./App.module.css";

const App = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const createTodo = (title) => {
    title = title.trim();

    if (title !== "") {
      const newTodo = {
        title,
        completed: false,
        id: Date.now(),
      };

      setTodos([...todos, newTodo]);
    } else {
      alert("Добавь, пожалуйста, текст задачи!");
    }
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);

    setTodos(newTodos);
  };

  const editTodo = (id, title) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title };
      }

      return todo;
    });

    setTodos(newTodos);
  };

  const checkTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }

      return todo;
    });

    setTodos(newTodos);
  };

  const changeFilter = (name) => {
    setFilter(name);
  };

  return (
    <div className={styles.container}>
      <div className={styles.todos}>
        <Header />
        <Main
          todos={todos}
          filter={filter}
          createTodo={createTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          checkTodo={checkTodo}
        />
        <Footer changeFilter={changeFilter} todos={todos} />
      </div>
    </div>
  );
};

export default App;
