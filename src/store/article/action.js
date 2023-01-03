import axios from "../../services/axios";
import { actShowLoading, actHideLoading } from "../loading/action";

export const SET_ARTICLE_INFOR = "SET_ARTICLE_INFOR";
export const SET_ARTICLE_LIST_All = "SET_ARTICLE_LIST_All";
export const actArticleCurrent = ({ currentArticle }) => {
  return {
    type: SET_ARTICLE_INFOR,
    payload: {
      currentArticle,
    },
  };
};
export const actSetListAllArticle = ({ dataListArticle }) => ({
  type: SET_ARTICLE_LIST_All,
  payload: {
    dataListArticle,
  },
});
// export const handleNewUser = (user) => {
//   return async (dispatch) => {
//     dispatch(actShowLoading());
//     try {
//       const result = await axios.post("/users", user);
//       dispatch(actHideLoading());
//       console.log("actions result", result);
//       if (result.status !== 200) {
//         alert(result.error);
//         return {
//           ok: false,
//           error: result.error,
//         };
//       } else {
//         const dataUser = result.data;
//         console.log("dataUser", dataUser);
//         // localStorage.setItem('access_token_login',token);
//         // dispatch(actArticleCurrent({dataUser}));
//         return { ok: true, data: dataUser };
//       }
//     } catch (err) {
//       dispatch(actShowLoading());
//       return { ok: false, error: err.message };
//     }
//   };
// };
// export const handleEditUser = (user) => {
//   return async (dispatch) => {
//     dispatch(actShowLoading());
//     try {
//       const result = await axios.put("/users/" + user.id, user);
//       dispatch(actHideLoading());
//       console.log("actions result", result);
//       if (result.status !== 200) {
//         alert(result.error);
//         return {
//           ok: false,
//           error: result.error,
//         };
//       } else {
//         const dataUser = result.data;
//         return { ok: true, data: dataUser };
//       }
//     } catch (err) {
//       dispatch(actShowLoading());
//       return { ok: false, error: err.message };
//     }
//   };
// };
// export const handleDeleteUser = (user) => {
//   console.log("-------------params", user.id.user_id);
//   return async (dispatch) => {
//     dispatch(actShowLoading());
//     try {
//       const result = await axios.delete("/users/" + user.id.user_id);
//       dispatch(actHideLoading());
//       console.log("actions result", result);
//       if (result.status !== 200) {
//         alert(result.error);
//         return {
//           ok: false,
//           error: result.error,
//         };
//       } else {
//         const dataUser = result.data;
//         return { ok: true, data: dataUser };
//       }
//     } catch (err) {
//       dispatch(actShowLoading());
//       return { ok: false, error: err.message };
//     }
//   };
// };
export const getAllArticle = ({ pageOffset, pageSize, query }) => {
  console.log("query", query);
  return async (dispatch) => {
    dispatch(actShowLoading());
    try {
      // const result = await axios.put("/users/" + user.id, user);
      const result = await axios.get(
        `/articles?${query ? "title" : ""}=${
          query.title
        }&pagination[pageOffset]=${pageOffset}&pagination[pageSize]=${pageSize}&sort[0]=published_at&sortby[0]=desc`
      );
      dispatch(actHideLoading());
      if (result.status !== 200) {
        alert(result.error);
        return {
          ok: false,
          error: result.error,
        };
      } else {
        // const dataListAllUsers = result.data;
        // // const { dataListArticle, metaListUser } = dataListAllUsers;
        const dataListArticle = result.data;
        console.log("---", dataListArticle);
        dispatch(actSetListAllArticle({ dataListArticle }));
        return { ok: true };
      }
    } catch (err) {
      dispatch(actShowLoading());
      return { ok: false, error: err.message };
    }
  };
};

export const fetchArticleById = (payload) => {
  return async (dispatch) => {
    dispatch(actShowLoading());
    try {
      // const result = await axios.put("/users/" + user.id, user);
      const result = await axios.get(`/articles/${payload.id}`);
      dispatch(actHideLoading());
      if (result.status !== 200) {
        alert(result.error);
        return {
          ok: false,
          error: result.error,
        };
      } else {
        // const { dataListArticle, metaListUser } = dataListAllUsers;
        const currentArticle = result.data;
        dispatch(actArticleCurrent({ currentArticle }));
        return { ok: true };
      }
    } catch (err) {
      dispatch(actShowLoading());
      return { ok: false, error: err.message };
    }
  };
};
