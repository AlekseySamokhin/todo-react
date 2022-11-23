import TodoItem from "../TodoItem/TodoItem";

import styles from "./TodoList.module.css";

const TodoList = (props) => {
  const { value, setValue, todos, setTodos, filterMap, filter } = props;

  return (
    <div className={styles.TodoList}>
      <ul className={styles.TodoListSheet}>
        {todos.filter(filterMap[filter]).map((item) => (
          <TodoItem
            key={item.id}
            todo={item}
            todos={todos}
            setTodos={setTodos}
            value={value}
            setValue={setValue}
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
