import React from "react";
import styles from "./CardFooter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../../redux/tasksSlice";
import { Link } from "react-router-dom";

const CardFooter = ({ id }) => {
    const dispatch = useDispatch();

    const tasks = useSelector((state) => {
        return state.tasks;
    });

    //Find and remove completed Task
    const removeCompletedTask = () => {
        tasks
            .filter((task) => task.completed)
            .forEach((completedTask) => {
                dispatch(deleteTask({ id: completedTask.id }));
            })
    };

    // Calculate the number of unchecked tasks
    const uncheckedTasks = tasks.filter((task) => !task.completed).length;

    return (
        <div className={styles.footerContainer}>
            <h4>
                {uncheckedTasks} task{uncheckedTasks !== 1 ? "s" : ""} left
            </h4>
            <h3>
                If you have an account 
                <Link to="/login">  Sign In</Link>
            </h3>
            <button onClick={removeCompletedTask}>clear completed</button>
        </div>
    );
};

export default CardFooter;
