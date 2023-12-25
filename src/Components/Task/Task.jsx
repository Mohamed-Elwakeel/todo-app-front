import React from "react";
import { useDispatch } from "react-redux";
import { toggleTask } from "../../redux/tasksSlice"
import styles from "./Task.module.css";

export const Task = ({ id, title, createdAt, completed }) => {
  const dispatch = useDispatch();

  const handleCheckedBox = () => {
    dispatch(toggleTask({ id: id }));
  };

  return (
    <div className={styles.taskContainer}>
      <li className={styles.taskItem}>
        <input
          className={styles.taskCheck}
          type="checkbox"
          checked={completed}
          onChange={handleCheckedBox}
        ></input>
        <p className={`${styles.taskText} ${completed ? styles.checked : ''}`}>{title}</p>
      </li>
      <div className={styles.taskDate}>
        <p className={styles.taskCreatedAt}>{createdAt}</p>
      </div>
    </div>
  );
};
