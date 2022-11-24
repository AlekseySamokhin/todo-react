import TodoItem from "../TodoItem/TodoItem";

import styles from "./TodoList.module.css";

const TodoList = ({
  memoizedDataTodos,
  filter,
  deleteTodo,
  editTodo,
  checkTodo,
}) => {
  return (
    <div className={styles.todoList}>
      <ul className={styles.todoListSheet}>
        {memoizedDataTodos[filter].map((item) => (
          <TodoItem
            key={item.id}
            todo={item}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            checkTodo={checkTodo}
          />
        ))}
      </ul>
      {memoizedDataTodos[filter].length === 0 && (
        <h3 className={styles.todoListEmpty}>
          {filter[0].toUpperCase() + filter.slice(1)} todos for today is
          empty...
        </h3>
      )}
    </div>
  );
};

export default TodoList;
