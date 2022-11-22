const initState = {
  filters: {
    search: "",
    status: "all",
    priority: [],
  },
  todoList: [
    {
      id: 1,
      name: "Learn",
      completed: false,
      priority: "Medium",
    },
    {
      id: 2,
      name: "Learn Redux",
      completed: false,
      priority: "High",
    },
    {
      id: 3,
      name: "Learn javascript",
      completed: false,
      priority: "Low",
    },
  ],
};
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };

    case "filters/searchFilterChange":
      return {
        ...state,
        filters: {
          ...state.filters,
          search: action.payload,
        },
      };
    default:
      return state;
  }
};

export default rootReducer;
