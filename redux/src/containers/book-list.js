//그냥 책리스트 랜더링 하는 컴포넌트 예시
import React, { Component } from 'react';  //컨테이너 -리액트 컴포넌트 , 리덕트에 관리되는 스테이트에 직접연결해줌  -

import { connect } from 'react-redux';
import { selectBook} from '../actions/index';
import{ bindActionCreators} from 'redux';//액션생성자

class BookList extends Component{//컴포넌트로 상속
    renderList() {//앱스테이트와 연결-this.props.books  -리액트뷰와 리덕트 스테이트를 합쳐줌
        return this.props.books.map((book) => {
            return(
                <li 
                key={book.title} 
                onClick={() => this.props.selectBook(book)}
                className="list-group-item">
                {book.title}
                </li>
            );
        });   //책리스트를 this.props로 연결   -배열은 map사용     키값은 유니크한 제목으로 사용(리스트중 중복되어선 안됨)
    }

    render() {
        console.log(this.props.asdf)//123
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }

} 

function mapStateToProps(state){ //state-> 책리스트와 디테일
    return {
        asdf: '123',
        book: state.books
    };//리덕스와 컨테이너 컴포넌트 연결방식

}//어플 스테이트 요소(책리스트, 책))를 가져야함


//mapDispatchToProps는 리턴받은것이 북리스트 컨테이너의 props로 연결   (this.props.selectBook로 호출가능(액션생성자를 호출하는것)))
function mapDispatchToProps(dispatch){
    //selectBook(액션생성자)이 호출될때 마다 리듀서로 전달 그게 dispatch로 흘러감
    //bindActionCreators 와 dispatch 는 액션을 가져와 모든 리듀서에 전달
    return bindActionCreators({ selectBook: selectBook}, dispatch)
}//selectBook: selectBook(실제 액션 생성자)


//컴포넌트에서 컨테이너로 북리스트를 바꿈-dispatch함수인 selectBook을 알아야함(props로 이용가능)
export default connect(mapStateToProps,mapDispatchToProps)(BookList);

//북리스트가 실제로 리덕스로부터 스테이트를 가져와 컴포넌트로 연결

//컨테이너랑 리덕스에 의해 만들어지는 스테이트를 직접 접근하는 컴포넌트
//리액트와 리덕트는 다른 라이브러리  연결하려면 또다른 리액트-리덕트가 필요하다     접점이 없음




//리액트 리덕트 중간에  합친 앱- 리액트-리덕트     리액트 컴포넌트에서 스테이트를 주입할떄 -데이터를 컴포넌트로 주입시키는것-컨테이너
//컴포넌트와 컨테이너 다름


//앱스테이트가 변할때 마다 리랜더링
//커넥트- 컨테이너 생성, 앱스테이트 바뀔떄마다 스테이트 함수안에 객체가 컴포넌트의 props로 할당