import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";

export const AddTask = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();

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

  return (
    <div className="add-task">
      <input
        type="text"
        className="task-input"
        placeholder="Add task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button className="task-btn" onClick={onSubmit}>
        Save
      </button>
    </div>
  );
};
