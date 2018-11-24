//액션이 없음- > 함수형
//import React from 'react';
//import {withGoogleMap, GoogleMap} from 'react-google-maps';
//import {GoogleMapLoader, GoogleMap} from 'react-google-maps';
//import { GoogleMap, Marker } from "google-maps"
/*export default (props) => {
    return(
        <GoogleMapLoader 
            containerElement={ <div style={{height: '100%'}} /> }
            googleMapElement={
                <GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat, lng: props.lon}} />
            }       //lng -> api응답은 lon   //자바스크립트 변수, 자바스크립트 오브젝트         
            />
    );
}*/
/*export default (props) =>
<GoogleMap
  defaultZoom={12}
  defaultCenter={{ lat: props.lat, lng: props.lon }}
>
  {props.isMarkerShown && <Marker position={{ lat: props.lat, lng: props.lon }} />}
</GoogleMap>*/

import React from 'react';
import {withGoogleMap, GoogleMap} from 'react-google-maps';

export default withGoogleMap(props => 
  <GoogleMap 
    defaultZoom={12}
    defaultCenter={{lat: props.lat, lng: props.lon}}
  />
);