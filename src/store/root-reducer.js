import { combineReducers } from "redux";
import authReducer from "./auth/reducer";

const frontApp = combineReducers({
  auth: authReducer,
});
console.log('----------',frontApp);

export default frontApp;
