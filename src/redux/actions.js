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

export const searchFilterByStatus = (data) => {
  return {
    type: "filters/searchFilterByStatus",
    payload: data,
  };
};
