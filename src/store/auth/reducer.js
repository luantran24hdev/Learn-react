import {LOGIN_TYPE} from './action'
const initState = { access_token:localStorage.getItem('access_token_login') || ''};
export default function authReducer(state = initState, action) {
  switch (action.type) {
    case LOGIN_TYPE:
      return {
        ...state,
        access_token:action.payload.token
      }
    default:
      return state
  }

}
