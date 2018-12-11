//리듀서- 앱 스테이트 반환 함수
//리덕트 파일을 앞에이름을 붙여주자 --해당파일 타입 알기 쉽게

export default function() {
  return [
    { title: "1번책", page: 100 },
    { title: "2번책", page: 109 },
    { title: "3", page: 1070 },
    { title: "4", page: 1 }
  ];
}
//1.리듀서 생성, 2.앱과 연결
