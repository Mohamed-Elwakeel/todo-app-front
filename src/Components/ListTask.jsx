import React from "react";
import { Task } from "./Task/Task";
import { useSelector } from "react-redux";

export const ListTask = () => {
  const tasks = useSelector((state) => {
    return state.tasks;
  });

  const unCompletedTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <ul className="tasks-list">
      {unCompletedTasks.map((todo) => (
        <Task
          key={todo.id}
          id={todo.id}
          title={todo.name}
          completed={todo.completed}
          createdAt={todo.createdAt}
        />
      ))

      }
      {completedTasks.map((todo) => (
        <Task
          key={todo.id}
          id={todo.id}
          title={todo.name}
          completed={todo.completed}
          createdAt={todo.createdAt}
        />
      ))}
    </ul>
  );
};
