//리액트를 모듈에서 가져오기
import React,{Component} from 'react';//상속위해 컴포넌트 불러오기
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'; //YTSearch-함수같은것

import SearchBar from './components/search_bar';//함수찾아서 임포트-실제주소를 써줘야됨(라이브러리에서 가져오는게 아님-npm 설치가아닌거)

import VideoList from './components/video_list';

import VideoDetail from './components/video_detail';

const API_KEY ='AIzaSyCkeBl5uuBD9p8hXDARaQZrdsgQ-munAxk'
//패키지 동작방식- 1 요소-검색어 오브젝트,api키

//스테이트를 기록해 비디오 리스트 추적--스테이트를 사용하려면 클래스 기반 컴포넌트 필요
//스테이트에 비디오를 빈배열로 세팅 
//컴포넌트 상속 --앱이 시작하면 인스턴스를 가져와 컨스트럭트 함수를 실행-바로 검색시작
class App extends Comment{ 
    constructor(props){
        super(props);

        this.state={
             videos: [],
             selectedVideo: null
             }; //빈 배열에서 채줘져서 순간 0에서 시작하는게 보임 ----서퍼보드 아이템

        YTSearch({key: API_KEY, term: 'surfboards'},(videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            }); 
              
        });
    }

//비디오 불러오라는 요청을 하는 동안 랜더링  -- 정의되지 않은 상태에서 랜더링됨
    render() {
        //this.props 전달받음

    return (
        <div>
            <SearchBar />
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList 
             onVideoSelect ={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos} /> 
        </div>
       );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
//콜백함수로 비디오 리스트를 반화 하는 데이터 

//오브젝트 넘기기- 새로운 비디오 리스트에 대한 스테이트르 업데이트

 //this.setState({ videos: videos }); 데이터가 같으면 es6에서 생략가능 

//컴포넌트가 랜더링 되면서 검색을 실행하고 , 검색이 완료되면 비디오 값을 업데이트
//첫 랜더링 -surfbords 를 검색해서 반환값 얻음

//App에서 비디오 리스트 전달

//변하지않으므로 const로 변수선언

//햐향데이터 플로우-모든 부모 컴포넌트는 데이터를 가져올 권리를 가짐-   상위컴포넌트는 데이터를 가지고 오는 것을 전담
//1.컴포넌트 생성- 컴포넌트는 html만듬
/*const App = () => { //es6문법- const App = function(){과 동일
    return (<div>
     <SearchBar />
    </div>
    );
}*/
//const로 선언한 변수는 최종값을 가진다 (변하지 않음-상수)
//jsx-자바스크립트안에 html처럼 보이는 코드사용가능
//jsx는 평범한 자바스크립트가 변환됨--코드가 깔끔함 읽기 편 함

//컴포넌트 랜더 할떄(컴포넌트를 페이지에 올릴때) html로 변환되 제공 -dom에 삽입됨
//웹팩 바벨- 코드를 웹프라우져로 전송


//2.이 컴포넌트가 만든 html을 가져가서 페이지에 적용해라(dom안에)

//ReactDOM.render(App);   클래스를 주고 있음 - 인스턴스로 바꿔줘야함

 



//각 파일당 하나의 컴포넌트를 만들어야 한다-- 국룰






//--save 명령어-- 패키지.제이슨 파일에 자동으로 저장해달라