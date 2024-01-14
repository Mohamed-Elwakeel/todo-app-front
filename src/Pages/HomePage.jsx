import React, { useState } from "react";
import { AddTask } from "../Components/AddTask/AddTask";
import { ListTask } from "../Components/ListTask";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import CardFooter from "../Components/CardFooter/CardFooter";

const HomePage = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className="App">
            <div className={`todoCard ${darkMode ? "dark-mode" : "light-mode"}`}>
                <div className="App-header">
                    <header>Todo App</header>
                    {darkMode ? (
                        <LightModeIcon className="iconLight" onClick={toggleDarkMode} />
                    ) : (
                        <DarkModeIcon className="iconDark" onClick={toggleDarkMode} />
                    )}
                </div>
                <AddTask />
                <ListTask />
                <CardFooter />
            </div>
            <div className="appInfo">
                {/* <h4>Double Click to Edit a task</h4> */}
                <div>Created with: React JS, Material UI, CSS3, & Redux toolkit</div>
                <div>Coded by: Mohamed Elwakeel</div>
            </div>
        </div>
    )
}

export default HomePage
