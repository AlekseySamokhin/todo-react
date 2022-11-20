import { FaRegCheckCircle } from 'react-icons/fa';

import styles from "./Header.module.css"

const Header = () => {
    return (
        <div className={styles.header}>
            <FaRegCheckCircle className={styles.header__icon} />
            <h1 className={styles.header__title}>Todo list</h1>
        </div>
    )
}

export default Header;