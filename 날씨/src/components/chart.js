import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';

function average(data) {
    return _.round(_.sum(data)/data.length); //평균값-loadash 라이브러리 사용-보일러플래이트에 포함
  }//round는 소수점 없앰

export default props => {
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.data)}{props.units}</div>
    </div>
  );
};