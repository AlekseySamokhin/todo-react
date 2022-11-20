import { AiOutlinePlusCircle } from "react-icons/ai";

import styles from "./InputTask.module.css"

const InputTask = () => {
    return (
        <div className={styles.InputTask}>
            <input className={styles.InputTask__input} value="What needs to be done?"></input>
            <button className={styles.InputTask__button}>
                <AiOutlinePlusCircle />
            </button>
        </div>
    )
}

export default InputTask;