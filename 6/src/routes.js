import React from "react";
import { Route, IndexRoute } from "react-router";

import App from "./components/app";
import PostsIndex from "./components/post_index";

const Greeting = () => {
  return <div> hi </div>;
};
export default (
  <Route path="/" components={App}>
    <IndexRoute components={PostsIndex} />
    <Route path="greet" components={Greeting} />
    <Route path="greet1" components={Greeting} />
    <Route path="greet2" components={Greeting} />
    <Route path="greet3" components={Greeting} />
  </Route> //app의 자식 컴포넌트
);
// 도메인 다음으로 /
