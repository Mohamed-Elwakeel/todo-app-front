import "./App.css";
import React from "react";
import { AddTask } from "./Components/AddTask";
import { ListTask } from "./Components/ListTask";

function App() {
  return (
    <div className="App">
      <header className="App-header">My Tasks</header>
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;

