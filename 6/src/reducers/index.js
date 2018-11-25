import { combineReducers } from "redux";
import PostsReducer from "./reducer_posts";

const rootReducer = combineReducers({
  post: PostsReducer
});

export default rootReducer;
