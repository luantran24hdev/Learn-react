export const todoListSelector = (state) => {
  const todoFiltered = state.todoList.filter((todo) => {
    return todo.name.includes(state.filters.search);
  });
  return todoFiltered;
};
export const searchTextSelector = (state) => state.filters.search;
