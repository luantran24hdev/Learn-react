import axios from "../../services/axios";
import { actShowLoading, actHideLoading } from "../loading/action";

export const SET_USER_INFOR = "SET_USER_INFOR";
export const SET_USER_LIST_All = "SET_USER_LIST_All";
export const actUserProfile = ({ dataUser }) => {
  return {
    type: SET_USER_INFOR,
    payload: {
      dataUser,
    },
  };
};
export const actSetListAllUser = ({ dataListUser }) => ({
  type: SET_USER_LIST_All,
  payload: {
    dataListUser,
  },
});
export const handleNewUser = (user) => {
  return async (dispatch) => {
    dispatch(actShowLoading());
    try {
      const result = await axios.post("/users", user);
      dispatch(actHideLoading());
      console.log("actions result", result);
      if (result.status !== 200) {
        alert(result.error);
        return {
          ok: false,
          error: result.error,
        };
      } else {
        const dataUser = result.data;
        console.log("dataUser", dataUser);
        // localStorage.setItem('access_token_login',token);
        // dispatch(actUserProfile({dataUser}));
        return { ok: true, data: dataUser };
      }
    } catch (err) {
      dispatch(actShowLoading());
      return { ok: false, error: err.message };
    }
  };
};
export const handleEditUser = (user) => {
  return async (dispatch) => {
    dispatch(actShowLoading());
    try {
      const result = await axios.put("/users/" + user.id, user);
      dispatch(actHideLoading());
      console.log("actions result", result);
      if (result.status !== 200) {
        alert(result.error);
        return {
          ok: false,
          error: result.error,
        };
      } else {
        const dataUser = result.data;
        console.log("dataUser", dataUser);
        // localStorage.setItem('access_token_login',token);
        // dispatch(actUserProfile({dataUser}));
        return { ok: true, data: dataUser };
      }
    } catch (err) {
      dispatch(actShowLoading());
      return { ok: false, error: err.message };
    }
  };
};
export const getAllUser = ({ pageOffset, pageSize, query }) => {
  return async (dispatch) => {
    dispatch(actShowLoading());
    try {
      // const result = await axios.put("/users/" + user.id, user);
      const result = await axios.get(`/users?${query ? query : ""}`);
      dispatch(actHideLoading());
      if (result.status !== 200) {
        alert(result.error);
        return {
          ok: false,
          error: result.error,
        };
      } else {
        const dataListAllUsers = result.data;
        // const { dataListUser, metaListUser } = dataListAllUsers;
        const dataListUser = result.data;
        dispatch(actSetListAllUser({ dataListUser }));
        return { ok: true };
      }
    } catch (err) {
      dispatch(actShowLoading());
      return { ok: false, error: err.message };
    }
  };
};
