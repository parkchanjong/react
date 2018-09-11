import { combineReducers } from 'redux';//스테이트 맵핑함
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({//객체넘길떄 리덕스가 앱스테이트 생성
  books: BooksReducer
});

export default rootReducer;
