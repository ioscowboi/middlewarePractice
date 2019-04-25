import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
// import _ from 'lodash';
import GoogleMap from '../components/googleMap';

class WeatherList extends Component {
    renderWeather( cityData ) {
        const name = cityData.city.name;
        // get an array of temperatures:
        const temps = cityData.list.map(weather => weather.main.temp);
        // ^^ original, but if we want to convert to farenheit:
        // const temps = _.map(cityData.list.map(weather => weather.main.temp), temp => temp / conversionhere);
        const pressure = cityData.list.map(baro => baro.main.pressure);
        const humid = cityData.list.map(humidity => humidity.main.humidity);
        // const lon = cityData.city.coord.lon;
        // const lat = cityData.city.coord.lat;
        // es6: instead:
        const { lon, lat } = cityData.city.coord;

        return (
            <tr key={name}>
                <td>{name}
                {/* component name */}
                <GoogleMap lat={lat} lon={lon} />
                </td>
                <td><Chart data={temps} color="orange" units={"\u00b0F"}/></td>
                <td><Chart data={pressure} color="blue" /></td>
                <td><Chart data={humid} color="black" /></td>   
            </tr>
        )
    }
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.weather.map( this.renderWeather )}
                </tbody>
            </table>
        );
    }
}

// function mapStateToProps (state) {
//     return { weather: state.weather };
// }

// es6:
function mapStateToProps ( {weather}) {
    return { weather }; // { weather } === { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);