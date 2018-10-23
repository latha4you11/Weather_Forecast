import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord; //es6 syntax - fetches cityData.city.coord.lat and .lon

    return(
        <tr key={cityData.city.name}>
            <td><GoogleMap lon={lon} lat={lat} /></td>
            <td><Chart data={temps} color="red" units="K"/></td>
            <td><Chart data={pressures} color="green" units="hPa" /></td>
            <td><Chart data={humidities} color="blue" units="%" /></td>
        </tr>
    )
  }

  render() {
    return (
      <div>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (Kelvin)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th>
                </tr> 
            </thead>
            <tbody>
                {this.props.weather.map(this.renderWeather)}
            </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);
