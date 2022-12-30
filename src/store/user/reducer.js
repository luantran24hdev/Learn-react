import { SET_USER_INFOR } from "./action";
import { SET_USER_LIST_All } from "./action";
const initState = {
  currentUser: null,
  listAllUser: [],
};

export default function UserReducer(state = initState, action) {
  switch (action.type) {
    case SET_USER_INFOR:
      return {
        ...state,
        currentUser: action.payload.user,
      };

    case SET_USER_LIST_All:
      return {
        ...state,
        listAllUser: action.payload,
      };

    default:
      return state;
  }
}
