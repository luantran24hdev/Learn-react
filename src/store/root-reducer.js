import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import loadingReducer from "./loading/reducer";
import UserReducer from "./user/reducer";
const frontApp = combineReducers({
  auth: authReducer,
  loading: loadingReducer,
  User: UserReducer,
});
export default frontApp;
