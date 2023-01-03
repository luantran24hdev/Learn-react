import { SET_ARTICLE_INFOR } from "./action";
import { SET_ARTICLE_LIST_All } from "./action";
const initState = {
  listAllArticle: [],
  metaAllArticle: {},
};

export default function ArticleReducer(state = initState, action) {
  switch (action.type) {
    case SET_ARTICLE_INFOR:
      return {
        ...state,
        currentArticle: action.payload.currentArticle.data,
      };

    case SET_ARTICLE_LIST_All:
      const listAllArticle = action.payload.dataListArticle.data;
      const metaAllArticle = action.payload.dataListArticle.meta;
      return {
        ...state,
        listAllArticle: listAllArticle,
        metaAllArticle: metaAllArticle,
      };

    default:
      return state;
  }
}
