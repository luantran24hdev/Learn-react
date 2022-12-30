import Login from "../pages/Login";
import Register from "../pages/Register";
import HomePage from "../pages/HomePage";

import UserList from "../pages/users";
import UserEdit from "../pages/users/edit.js";
import UserNew from "../pages/users/new.js";

import ArticleList from "../pages/articles";
import ArticleEdit from "../pages/articles/edit.js";
import ArticleNew from "../pages/articles/new.js";

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

  // USER
  {
    path: PATHS.USER_LIST,
    exact: true,
    component: UserList,
  },
  {
    path: PATHS.USER_EDIT,
    exact: true,
    component: UserEdit,
  },
  {
    path: PATHS.USER_NEW,
    exact: true,
    component: UserNew,
  },

  // Article
  {
    path: PATHS.ARTICLE_LIST,
    exact: true,
    component: ArticleList,
  },

  {
    path: PATHS.ARTICLE_EDIT,
    exact: true,
    component: ArticleEdit,
  },
  {
    path: PATHS.ARTICLE_NEW,
    exact: true,
    component: ArticleNew,
  },
];
