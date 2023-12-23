import "./App.css";
import React from "react";
import { AddTask } from "./Components/AddTask/AddTask";
import { ListTask } from "./Components/ListTask";

function App() {
  return (
    <div className="App">
      <div className="todoCard">
        <header className="App-header">Todo App</header>
        <AddTask />
        <ListTask />
      </div>
      <div className="appInfo">
        <h4>Double Click to Edit a task</h4>
        <div>Created with: React js, material ui, css3, & Redux toolkit</div>
        <div>Hnadcoded by: Mohamed Elwakeel</div>
      </div>
    </div>
  );
}

export default App;

