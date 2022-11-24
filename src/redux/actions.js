export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};

export const toggleTodo = (data) => {
  return {
    type: "todoList/toggleTodo",
    payload: data,
  };
};

export const newTodoList = (data) => {
  return {
    type: "todoList/newTodoList",
    payload: data,
  };
};
export const removeTodoList = (data) => {
  return {
    type: "todoList/removeTodoList",
    payload: data,
  };
};
export const removeOneItem = (data) => {
  return {
    type: "todoList/removeOneItem",
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

export const priorityFilter = (data) => {
  return {
    type: "filters/priorityFilter",
    payload: data,
  };
};
