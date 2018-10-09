import React, { Component} from 'react';
import { connect } from 'react-redux';

export default class BookDetail extends Comment {
  render() {
    if (!this.props.book) {// 첫 스테이트 초기화   return state 되면서 렌더링
      return <div>select a book to get started.</div>
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>제목 : {this.props.book.title}</div>
        <div>페이지수 : {this.props.book.page}</div>
      </div>
    );
  }
}

function mapStateToProps(state){
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);
//컨테이너 완성