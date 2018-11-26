import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/chart";
//import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    //const temps = _map(cityData.list.map(weather => weather.main.temp), (temp) => temp -273);   //단위를 섭시나 뭐로 바꿀 떄  temps 안에서 바꾸자
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    console.log("list", cityData);
    //console.log("state", this.state);
    const { lon, lat } = cityData.city.coord; //es6로 두개합침
    // <td><GoogleMap lon={lon} lat={lat} /></td>
    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Chart data={temps} color="orange" units="캘빈" />
        </td>
        <td>
          <Chart data={pressures} color="green" units="hPa" />
        </td>
        <td>
          <Chart data={humidities} color="black" units="%" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>도시</th>
            <th>온도 (캘빈)</th>
            <th>기압 (hph)</th>
            <th>습기 (퍼센트)</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  //=const weather = state.weather
  console.log("weather", weather);
  return { weather }; //={ weather: weather };
}

export default connect(mapStateToProps)(WeatherList);
