// export const todoListSelector = (state) => {
//   const searchText = searchTextSelector(state);
//   const todoFiltered = state.todoList.filter((todo) => {
//     return todo.name.includes(searchText);
//   });
//   return todoFiltered;
// };
// export const searchTextSelector = (state) => state.filters.search;

//

import { createSelector } from "reselect";

export const searchTextSelector = (state) => state.filters.search;
export const todoListSelector = (state) => state.todoList;

export const todosRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  (todoList, searchText) => {
    return todoList.filter((todo) => {
      return todo.name.includes(searchText);

      // return (
      //   todo.name.includes(searchText) &&
      //   (status === 'Completed' ? todo.completed : !todo.completed) &&
      //   (priorities.length ? priorities.includes(todo.priority) : true)
      // );
    });
  }
);
