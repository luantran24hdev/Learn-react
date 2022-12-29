import Login from "../pages/Login";
import Register from "../pages/Register";
import HomePage from "../pages/HomePage";
import UserDetail from "../pages/UserDetail";
import UserList from "../pages/UserList";

// import UserProfile from "../pages/UserProfile";

import { PATHS } from "../paths";

export const Routers = [
  {
    path: PATHS.LOGIN,
    exact: true,
    component: Login,
  },
  {
    path: PATHS.REGISTER,
    exact: true,
    component: Register,
  },
  {
    path: PATHS.HOMEPAGE,
    exact: true,
    component: HomePage,
  },
  // {
  //   path: PATHS.USER_PROFILE,
  //   exact: true,
  //   component: UserProfile,
  // },
  // USER_LIST
  {
    path: PATHS.USER_LIST,
    exact: true,
    component: UserList,
  },
  {
    path: PATHS.USER_DETAIL,
    exact: true,
    component: UserDetail,
  },

  // {
  //   path: PATHS.ADMIN,
  //   exact: true,
  //   component: Admin,
  // },
];
