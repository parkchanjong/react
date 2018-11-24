import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      console.log("reducer", action.payload);
      //return state.concat([action.payload.data]); 아래와 동일 es6       concat-> 새로운배열을 만듬   => [city,city,city..]
      return [action.payload.data, ...state];
  }

  //console.log('Action received',action);
  return state;
}
