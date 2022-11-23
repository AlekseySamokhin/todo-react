import TodoItem from "../TodoItem/TodoItem";

import styles from "./TodoList.module.css";

import filters from "../../filters";

const TodoList = (props) => {
  const { todos, filter, deleteTodo, editTodo, checkTodo } = props;

  return (
    <div className={styles.TodoList}>
      <ul className={styles.TodoListSheet}>
        {todos.filter(filters[filter]).map((item) => (
          <TodoItem
            key={item.id}
            todo={item}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            checkTodo={checkTodo}
          />
        ))}
      </ul>
      {todos.length === 0 && (
        <h3 className={styles.TodoListEmpty}>
          Todo List for today is empty...
        </h3>
      )}
    </div>
  );
};

export default TodoList;
