import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../redux/tasksSlice";
import "./Task.css";

export const Task = ({ id, title }) => {
  const dispatch = useDispatch();

  const removeTask = () => {
    dispatch(deleteTask({ id: id }));
  };

  return (
    <li className="task-item">
      <div>{title}</div>
      <div>
        <button
          className="remove-task-button"
          onClick={() => {
            removeTask();
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
};
