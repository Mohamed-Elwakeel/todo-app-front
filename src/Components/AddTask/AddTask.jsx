import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/tasksSlice";
import styles from "./AddTask.module.css"

export const AddTask = () => {
  const [value, setValue] = useState("");

  // Get access to the Redux dispatch function
  const dispatch = useDispatch();

  const addTaskToStore = () => {
    if (value.trim().length === 0) {
      alert("Enter a task before adding !!");
      setValue("");
      return;
    }

    dispatch(
      addTask({
        task: value,
      })
    );
    setValue("");
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
  }

  // Enter the task with 'Enter' key
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTaskToStore();
    }
  }

  return (
    <div className={styles.addTask}>
      <input
        type="text"
        className={styles.taskInput}
        placeholder="What needs to be done?"
        value={value}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      ></input>
    </div>
  );
};
