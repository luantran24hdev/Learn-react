import { SET_USER_INFOR } from "./action";
import { SET_USER_LIST_All } from "./action";
const initState = {
  currentUser: null,
  listAllUser: [],
  metaAllUser: {},
};

export default function UserReducer(state = initState, action) {
  switch (action.type) {
    case SET_USER_INFOR:
      return {
        ...state,
        currentUser: action.payload.currentUser.data,
      };

    case SET_USER_LIST_All:
      const listAllUser = action.payload.dataListUser.data;
      const metaAllUser = action.payload.dataListUser.meta;
      return {
        ...state,
        listAllUser: listAllUser,
        metaAllUser: metaAllUser,
      };

    default:
      return state;
  }
}
