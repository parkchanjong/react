import { combineReducers } from "redux";
import PostsReducer from "./reducer_posts";
import { reducer as formReducer } from "redux-form";
// 리덕스 폼에서 리듀서를 가져오는더 폼리듀서로 선언

const rootReducer = combineReducers({
  post: PostsReducer,
  form: formReducer
});

export default rootReducer;
