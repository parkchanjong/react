import React, {Component} from 'react';
//리액트가 찾게 해줌   {}의 의미-const Component = React.Component;


class SearchBar extends Component { 
    constructor(props){
        super(props);

        this.state = {term:''};
    }
    
    render(){
        return ( 
        <div>
         <input 
         value={this.state.term}
         onChange={event => this.setState({ term: event.target.value })} />
        
        </div>
        );
}
}

export default SearchBar;


//검색바 클래스 생성후 React.Component로 부터 기능 물려받는것

//모든자바 스크립트가 가지고 있는 함수 클래스 생성될떄마다 실행됨                               클래스 기반 컴포넌트만 스테이트를 가짐

//super로 부모함수 호출

//새로운 오브젝트 생성하면서 초기화--자바스크립트 객체                this.state =    constructor함수 안에서만 가능

//Value of the input: {this.state.term}     인풋은 스테이트가 뭘해야할지 알려줌
//앱(컴포넌트)이 일반함수 대신 랜더 함수 호출                              //es6 문법-- 컴포넌트 밖에선 state는  setstate로만 조정-호출하면 스테이트 업데이트

//return <input onChange={this.onInputChange} />;//인풋요소를 만들고 this.onInputChange안에 넣음-인풋의 변화를 감지
//onInputChange(event){ //인풋의 변화를 감지
//   console.log(event.target.velue);//인풋 안의 값 반환






//const SearchBar = () => {  클래스로 만들어서 기능 더 많이 만들기(다른컴포넌트와 소통)
//    return <input />
//};                        인풋 컴포넌트 정의 --jsx형태로 반환


//앱안에서 어디서든 함수호출할수 있음


//앱- 검색바 컴포넌트




//앱 시작하면 - 검색바 랜더링- 검색바에 인스턴스 생성 - this.state문자열 초기화 - 컴포넌트 term값 가져와 인풋값 랜더링(초기값은 빈문자열)
//값입력되면 스테이트 업데이트됨- term=변화된 텍스트(인풋값은 변화 되지 않음)   --스테이트로 값을 받음