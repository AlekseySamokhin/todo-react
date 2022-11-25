import TodoItem from "../TodoItem/TodoItem";

import styles from "./TodoList.module.css";

const TodoList = ({
  todosMemo,
  filter,
  deleteTodo,
  editTodo,
  checkTodo,
  value,
  onChangeValue,
}) => {
  return (
    <div className={styles.todoList}>
      <ul className={styles.todoListSheet}>
        {todosMemo[filter].map((todo) => (
          <TodoItem
            key={todo.id}
            value={value}
            onChangeValue={onChangeValue}
            todo={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            checkTodo={checkTodo}
          />
        ))}
      </ul>
      {todosMemo[filter].length === 0 && (
        <h3 className={styles.todoListEmpty}>
          {filter[0].toUpperCase() + filter.slice(1)} todos for today is
          empty...
        </h3>
      )}
    </div>
  );
};

export default TodoList;
