// const initState = [
//   { id: 1, name: "Learn Yoga", completed: false, priority: "Medium" },
//   { id: 2, name: "Learn Redux", completed: true, priority: "High" },
//   { id: 3, name: "Learn JavaScript", completed: true, priority: "Low" },
// ];

// const todoListReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "todoList/addTodo":
//       return [...state, action.payload];
//     case "todoList/toggleTodo":
//       return state.map((item) =>
//         item.id === action.payload
//           ? { ...item, completed: !item.completed }
//           : item
//       );

//     default:
//       return state;
//   }
// };

// export default todoListReducer;

import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "todoList",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodo: (state, action) => {
      const currentTodo = state.find((item) => item.id === action.payload);
      if (currentTodo) {
        currentTodo.completed = !currentTodo.currentTodo;
      }
    },
    newTodoList: (state, action) => {
      console.log("action", action);
      state = action.payload;
    },
  },
});
