import { combineReducers } from "redux";

import FiltersReducer from "../components/Filters/FiltersSlice";
import TodoListReducer from "../components/TodoList/TodosSlice";

const rootReducer = combineReducers({
  filters: FiltersReducer,
  todoList: TodoListReducer,
});

export default rootReducer;
