import { FETCH_POSTS } from "../action/index";
const INITIAL_STATE = { all: [], post: nell }; //전체리스트, 포스트 개별 스테이트

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, all: action.payload.data };
    default:
      return state;
  }
}
