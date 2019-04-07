import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
    renderWeather( cityData ) {
        console.log(cityData);
        const name = cityData.city.name;
        return (
            <tr key={name}>
                <td>
                    {name}
                </td>
                <td>
                    {cityData.list[0].main.temp}
                </td>
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