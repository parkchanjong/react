import axios from 'axios';

const API_KEY = '3c74c81731ffabbe5f3633deb435b017'
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'  //변수, 문자열
//리듀서와 연결
export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    //console.log('Request:',request);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}