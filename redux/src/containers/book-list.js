//책리스트 랜더링
import React, { Component } from 'react';  //컨테이너 -리액트 컴포넌트 , 리덕트에 관리되는 스테이트에 직접연결해줌  -

export default class BookList extends Comment{//컴포넌트로 상속
    renderList() {//앱스테이트와 연결-this.props.books  -리액트뷰와 리덕트 스테이트를 합쳐줌
        return this.props.books.map((book) => {
            return(
                <li key={book.title} className="list-group-item">{book.title}</li>
            );
        });   //책리스트를 this.props로 연결   -배열은 map사용     키값은 유니크한 제목으로 사용(리스트중 중복되어선 안됨)
    }

    render() {
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }

}


//리액트 리덕트 중간에  합친 앱- 리액트-리덕트     리액트 컴포넌트에서 스테이트를 주입할떄 -데이터를 컴포넌트로 주입시키는것-컨테이너
//컴포넌트와 컨테이너 다름