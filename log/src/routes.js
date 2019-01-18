import React from "react";
import { Route, IndexRoute } from "react-router";

import App from "./components/app";
import PostsIndex from "./components/posts_index";
import PostsNew from "./components/posts_new";
import PostsShow from "./components/posts_show";

const Greeting = () => {
  return <div> hi </div>;
};
export default (
  <Route path="/" components={App}>
    <IndexRoute components={PostsIndex} />
    <Route path="posts/new" components={PostsNew} />
    <Route path="posts/:id" components={PostsShow} />
  </Route> //app의 자식 컴포넌트
);
// 도메인 다음으로 /
