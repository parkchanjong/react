import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { Router, browserHistory } from "react-router"; //g

import reducers from "./reducers";
import routes from "./routes"; //g
import promise from "redux-promise";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore); //리듀서로 가기전에 promis 거치기

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.querySelector(".container")
);
