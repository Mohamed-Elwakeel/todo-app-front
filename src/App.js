import React from "react";
import "./App.css";
import { AddTask } from "./Components/AddTask/AddTask";
import CardFooter from "./Components/CardFooter/CardFooter";
import { ListTask } from "./Components/ListTask";

function App() {
  // const [darkMode, setDarkMode] = useState(false);

  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  // };

  return (
    <div className="App">
      {/* <div className={`todoCard ${darkMode ? "dark-mode" : "light-mode"}`}> */}
      <div className="todoCard" >
        <div className="App-header">
          <header>Todo App</header>
          {/* {darkMode ? (
            <LightModeIcon className="iconLight" onClick={toggleDarkMode} />
          ) : (
            <DarkModeIcon className="iconDark" onClick={toggleDarkMode} />
          )} */}
        </div>
        <AddTask />
        <ListTask />
        <CardFooter />
      </div>
      <div className="appInfo">
        {/* <h4>Double Click to Edit a task</h4> */}
        <div>Created with: React js, material ui, css3, & Redux toolkit</div>
        <div>Coded by: Mohamed Elwakeel</div>
      </div>
    </div>
  );
}

export default App;
