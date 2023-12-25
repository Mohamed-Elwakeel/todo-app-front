import { createSlice } from "@reduxjs/toolkit";


const formatDate = (date) => {
  const options = {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  };

  return new Intl.DateTimeFormat('en-US', options).format(date);
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: new Date().getTime(), // Convert the Date object to a timestamp
        name: action.payload.task,
        createdAt: formatDate(new Date()), // Store the creation time as a formatted string
        completed: false,
      };
      state.unshift(newTask);
    },
    toggleTask: (state, action) => {
      const task = state.find((item) => item.id === action.payload.id);
      if (task) {
        task.completed = !task.completed
      }
    },
    deleteTask: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addTask, toggleTask, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
