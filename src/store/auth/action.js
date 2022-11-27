import axios from "../../services/axios";
import { actShowLoading, actHideLoading } from "../loading/action";

export const LOGIN_TYPE = "LOGIN_TYPE";
export const actLogin = ({token}) => {
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
          'Basic ' + Buffer.from(email + ':' + password).toString('base64'),
      }
      
      const result = await axios.post('/sign-in', null, { headers })
      dispatch(actHideLoading());
      console.log("result", result);
      if (result.status !== 200) {
        alert(result.error)
        return {
          ok: false,
          error: result.error
        }
      } else {
        const token = result.data;
        localStorage.setItem('access_token_login',token);
        dispatch(actLogin({token}));
        return { ok: true }
      }
    } catch (err) {
      dispatch(actShowLoading());
      return { ok: false, error: err.message };
    }
  };
};
