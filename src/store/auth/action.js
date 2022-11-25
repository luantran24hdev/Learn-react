import axios from "../../services/axios";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const actLogin = ({token}) => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      token,
    },
  };
};
export const handleLogin = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const headers = {
        Authorization:
          'Basic ' + Buffer.from(email + ':' + password).toString('base64'),
      }
      const result = await axios.post('/sign-in', null, { headers })
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
      return { ok: false, error: err.message };
    }
  };
};
