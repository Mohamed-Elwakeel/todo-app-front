import "./App.css";
import React from "react";
import { AddTask } from "./Components/AddTask/AddTask";
import { ListTask } from "./Components/ListTask";

function App() {
  return (
    <div className="App">
      <header className="App-header">Todo App</header>
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;

