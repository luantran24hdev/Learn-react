import axios from "../../services/axios";
import { actShowLoading, actHideLoading } from "../loading/action";
import "react-notifications/lib/notifications.css";

export const LOGIN_TYPE = "LOGIN_TYPE";
export const actLogin = ({ token }) => {
  return {
    type: LOGIN_TYPE,
    payload: {
      token,
    },
  };
};
export const handleLogin = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(actShowLoading());
    try {
      const headers = {
        Authorization:
          "Basic " + Buffer.from(email + ":" + password).toString("base64"),
      };

      const result = await axios.post("/sign-in", null, { headers });
      dispatch(actHideLoading());
      console.log("result", result);
      if (result.status) {
        const token = result.data;
        localStorage.setItem("access_token_login", token);
        dispatch(actLogin({ token }));
        return { ok: true, data: result };
      } else {
        return {
          ok: false,
          error: result.error,
        };
      }
    } catch (e) {
      alert("Email or Password incorrect, try again!");
      dispatch(actHideLoading());
      throw e;
    }
  };
};
