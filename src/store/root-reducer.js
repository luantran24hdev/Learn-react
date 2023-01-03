import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import loadingReducer from "./loading/reducer";
import UserReducer from "./user/reducer";
import ArticleReducer from "./article/reducer";
const frontApp = combineReducers({
  auth: authReducer,
  loading: loadingReducer,
  User: UserReducer,
  Article: ArticleReducer,
});
export default frontApp;
