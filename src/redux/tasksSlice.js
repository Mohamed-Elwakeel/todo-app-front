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
        createdAt: formatDate(new Date()) // Store the creation time as a formatted string
      };
      state.push(newTask);
    },
    deleteTask: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addTask, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
