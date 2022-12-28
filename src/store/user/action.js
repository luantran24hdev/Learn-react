import axios from "../../services/axios";
import { actShowLoading, actHideLoading } from "../loading/action";

export const USER_TYPE = "USER_TYPE";
export const actUserProfile = ({ dataUser }) => {
  return {
    type: USER_TYPE,
    payload: {
      dataUser,
    },
  };
};
export const handleEditUser = (user) => {
  return async (dispatch) => {
    console.log("user123", user);
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
