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
  initialState: {
    data: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.data.push(action.payload);
    },
    toggleTodo: (state, action) => {
      const currentTodo = state.data.find((item) => item.id === action.payload);
      if (currentTodo) {
        currentTodo.completed = !currentTodo.currentTodo;
      }
    },
    newTodoList: (state, action) => {
      state.data = action.payload;
    },
    removeTodoList: (state, action) => {
      state.data = action.payload;
    },
    removeOneItem: (state, action) => {
      const objWithIdIndex = state.data.find(
        (obj) => obj.id === action.payload
      );
      console.log("objWithIdIndex", objWithIdIndex);
      state.data.splice(objWithIdIndex, 1);
    },
  },
});
