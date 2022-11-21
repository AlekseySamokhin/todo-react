import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";

import styles from "./Todos.module.css";

const Todos = () => {
  return (
    <div className={styles.todos}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Todos;
