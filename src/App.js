import "./App.css";
import React from "react";
import { AddTask } from "./Components/AddTask";
import {} from "./Components/ListTask";

function App() {
  return (
    <div className="App">
      <header className="App-header">My Tasks</header>
      <AddTask />
    </div>
  );
}

export default App;

// The user should be:
// Able to add a newTodo
// Filter the tasks by (done/not)
// Edit a task
