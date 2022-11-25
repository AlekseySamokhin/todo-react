import TodoItem from "../TodoItem/TodoItem";

import styles from "./TodoList.module.css";

const TodoList = ({
  todosMemo,
  filter,
  deleteTodo,
  editTodo,
  checkTodo,
  countCompleted,
  clearCompletedTodo,
}) => {
  const handleClearCompleted = () => {
    clearCompletedTodo();
  };

  return (
    <div className={styles.todoList}>
      <ul className={styles.todoListSheet}>
        {todosMemo[filter].map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            checkTodo={checkTodo}
          />
        ))}
      </ul>
      {todosMemo[filter].length === 0 && (
        <h3 className={styles.todoListEmpty}>
          {filter} todos for today is empty...
        </h3>
      )}
      {countCompleted !== 0 && (
        <button
          className={styles.clearCompletedButton}
          onClick={handleClearCompleted}
        >
          Clear completed
        </button>
      )}
    </div>
  );
};

export default TodoList;
