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
export const handleEditUser = (dataObj) => {
  console.log("dataObj", dataObj);

  return async (dispatch) => {
    // dispatch(actShowLoading());
    try {
      const token = localStorage.getItem("access_token_login");

      const result = await axios.put("/users/" + dataObj.userId, dataObj.user);
      dispatch(actHideLoading());
      console.log("result", result);
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
        return { ok: true };
      }
    } catch (err) {
      dispatch(actShowLoading());
      return { ok: false, error: err.message };
    }
  };
};
