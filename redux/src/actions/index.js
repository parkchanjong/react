export function selectBook(book) {//액션 생성자 , 액션리턴, 타입-오브젝트
  //console.log('A book has been selected', book.title);
  return{
    type: 'BOOK_SELECTED',
    payload: book
  };

}

//액션생성자- 액션을 반환하는함수
//액션- 모든 리듀서로 흐르는 오브젝트