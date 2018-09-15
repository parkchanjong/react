import React, { Component } from 'react';
import BookList from '../containers/book-list';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
      </div>      
    );
  }
}
//스테이트의 최상위 부모 컴포넌트만 리덕트에 연결되어야됨
//앱 스테이트가 프로퍼티를 가져야됨