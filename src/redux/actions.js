export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};

export const searchFilterChange = (data) => {
  return {
    type: "filters/searchFilterChange",
    payload: data,
  };
};
