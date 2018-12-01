import React from "react";
import { Route, IndexRoute } from "react-router";

import App from "./components/app";
import PostsIndex from "./components/post_index";
import PostsNew from "./components/posts_new";

export default (
  <Route path="/" components={App}>
    <IndexRoute components={PostsIndex} />
    <Route path="posts/new" components={PostsNew} />
  </Route> //app의 자식 컴포넌트    유저가 라우트에 방문하면 컴포넌트를 보여줘라
);
// 도메인 다음으로 /
