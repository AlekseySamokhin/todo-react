import React from "react";

import FilterButton from "../FilterButton/FilterButton";

// import { FilterTypes } from "../../store/types";

import styles from "./TodoFooter.module.css";

const TodoFooter: React.FC = () => {
  // const buttons: string[] = ["all", "active", "completed"];

  return (
    <div className={styles.footer}>
      {/* <div className={styles.filterTodos}>
        {buttons.map((button) => (
          <FilterButton key={button} filter={button} />
        ))}
      </div> */}

      <FilterButton />
    </div>
  );
};

export default TodoFooter;
