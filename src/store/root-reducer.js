import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import loadingReducer from "./loading/reducer";

const frontApp = combineReducers({
  auth: authReducer,
  loading: loadingReducer,
});
export default frontApp;
