//책리스트 랜더링
import React, { Component } from 'react';  //컨테이너 -리액트 컴포넌트 , 리덕트에 관리되는 스테이트에 직접연결해줌  -

import { connect } from 'react-redux';
import { selectBook} from '../actions/index';
import{ bindActionCreators} from 'redux';

class BookList extends Comment{//컴포넌트로 상속
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

function mapStateToProps(state){
    return {
        book: state.books
    };//리덕스와 컨테이너 컴포넌트 연결방식

}//어플 스테이트 요소(책리스트, 책))를 가져야함

function mapDispatchToProps(dispatch){//selectBook이 호출될때 마다 리듀서로 전달
    return bindActionCreators({ selectBook: selectBook}, dispatch)
}



export default connect(mapStateToProps,mapDispatchToProps)(BookList);

//북리스트가 실제로 리덕스로부터 스테이트를 가져와 컴포넌트로 연결

//컨테이너랑 리덕스에 의해 만들어지는 스테이트를 직접 접근하는 컴포넌트
//리액트와 리덕트는 다른 라이브러리  연결하려면 또다른 리액트-리덕트가 필요하다     접점이 없음




//리액트 리덕트 중간에  합친 앱- 리액트-리덕트     리액트 컴포넌트에서 스테이트를 주입할떄 -데이터를 컴포넌트로 주입시키는것-컨테이너
//컴포넌트와 컨테이너 다름


//앱스테이트가 변할때 마다 리랜더링
//커넥트- 컨테이너 생성, 앱스테이트 바뀔떄마다 스테이트 함수안에 객체가 컴포넌트의 props로 할당