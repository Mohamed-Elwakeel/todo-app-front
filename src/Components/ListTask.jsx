import React from "react";
import { Task } from "./Task";
import { useSelector } from "react-redux";

export const ListTask = () => {
  const tasks = useSelector((state) => {
    return state.tasks;
  });

  return (
    <ul className="tasks-list">
      {tasks.map((todo) => (
        <Task id={todo.id} title={todo.name} completed={todo.status} />
      ))}
    </ul>
  );
};
