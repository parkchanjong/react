// 스테이트는 앱스테이트가 아니다
//스테이트는 리듀서가 권한을 가지고 있다
export default function(state = null, action) {
  //초기값 을 null -es6-> 초기값이 undefined 면
  switch (action.type) {
    case "BOOK_SELECTED":
      return action.payload; // 원본 오브젝트로 리턴해야됨
  }

  return state;
} //액션이 트리거 되면 스테이트 추가 -> 스테이트가 리듀서로 흘러감(앱스테이트 아님) -디스패치될떄마다 호출

//앱스테이트는 모든 리듀서에 의해 조합
//리덕스- 부팅 액션을 리듀서로 보냄
