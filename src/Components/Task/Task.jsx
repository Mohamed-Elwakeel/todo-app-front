import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../redux/tasksSlice";
import styles from "./Task.module.css";

export const Task = ({ id, title, createdAt }) => {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();

  // const removeTask = () => {
  //   dispatch(deleteTask({ id: id }));
  // };

  const handleCheckedBox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={styles.taskContainer}>
      <li className={styles.taskItem}>
        <input
          className={styles.taskCheck}
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckedBox}
        ></input>
        <p className={`${styles.taskText} ${isChecked ? styles.checked : ''}`}>{title}</p>
      </li>
      <div className={styles.taskDate}>
        <p className={styles.taskCreatedAt}>{createdAt}</p>
      </div>
      <div>
        {/* <button
          className={styles.deleteBtn}
          onClick={() => {
            removeTask();
          }}
        >
          Delete
        </button> */}
      </div>
    </div>
  );
};
