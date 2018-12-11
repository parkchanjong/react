import React, { Component } from "react";

import BookList from "../containers/book-list";
import BookDetail from "../containers/book-detail";

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    ); //북 리스트 렌더링,북디테일   생성 밖에 안함
  }
}
//스테이트의 최상위 부모 컴포넌트만 리덕트에 연결되어야됨
//앱 스테이트가 프로퍼티를 가져야됨
