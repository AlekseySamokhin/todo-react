import { FiX } from "react-icons/fi";
import { BiPencil } from "react-icons/bi";

import styles from "./TodoItem.module.css"

const TodoItem = () => {
    return (
        <li className={styles.TodoItem}>
            <label className={styles.TodoItem__label}>
                <input type="checkbox" className={styles.TodoItem__checkbox} />
                <h3 className={styles.TodoItem__title}>123</h3>
            </label>
            <div className={styles.TodoItem__buttons}>
                <button className={styles.TodoItem__edit}>
                    <BiPencil />
                </button>
                <button className={styles.TodoItem__delete}>
                    <FiX />
                </button>
            </div>
        </li>
    )
}

export default TodoItem;