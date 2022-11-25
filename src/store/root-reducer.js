import { combineReducers } from "redux";
import authReducer from "./auth/reducer";

const frontApp = combineReducers({
  auth: authReducer,
});
export default frontApp;
