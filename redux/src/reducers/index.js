import { combineReducers } from "redux"; //스테이트 맵핑함
import BooksReducer from "./reducer_books";
import ActiveBook from "./reducer_active_book";

const rootReducer = combineReducers({
  //객체넘길떄 리덕스가 앱스테이트 생성
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;

//컨테이너를 만들고 리덕스 스테이트를 바로 접근하는 컴포넌트를 가져야함
