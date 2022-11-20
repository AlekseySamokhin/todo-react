import { useState } from "react";

import styles from "./Footer.module.css"

const Footer = () => {
    const [count, setCount] = useState(0)

    return (
        <div className={styles.footer}>
            <span className={styles.todo__count}>{count} items left</span>
            <ul className={styles.filter__list}>
                <li className={styles.filter__item}>All</li>
                <li className={styles.filter__item}>Active</li>
                <li className={styles.filter__item}>Completed</li>
            </ul>
        </div>
    )
}

export default Footer;