import React, { Component } from 'react';
import './Weather.css';

class Weather extends Component {
  render() {
    let location = this.props.data.current_observation.display_location.full;
    let weatherIcon = this.props.data.current_observation.icon;
    let condition = this.props.data.current_observation.weather;
    let time = this.props.data.current_observation.observation_time;
    let temp = this.props.data.current_observation.temperature_string;
    let summary = this.props.data.forecast.txt_forecast.forecastday[0].fcttext;
    let low = this.props.data.forecast.simpleforecast.forecastday[0].high.fahrenheit;
    let high = this.props.data.forecast.simpleforecast.forecastday[0].low.fahrenheit;

    return (
      <div className='Weather'>
        <h2 className='city-name-title'>{location}</h2>
        <div className='icon-temp-container'>
          <img className='condition-icon' src={this.props.icons[weatherIcon]}/>
          <h1 className='current-temp'>{temp}&#8457;</h1>
          <div className='high-low-temp'>
            <h3 className='high-temp'>High: {high}&#8457;</h3>
            <h3 className='low-temp'>Low: {low}&#8457;</h3>
          </div>
        </div>
        <h2 className='current-condition'>{condition}</h2>
        <h2 className='current-summary'>{summary}</h2>
        <h3 className="current-date">{time}</h3>
      </div>
    );

    {/*
        <h1 className="city-name-title">{Weather.location}</h1>
        <h2 className="current-date">September 00, 2018</h2>
        <div className='temperatures'>
          <h1 className='current-temp'>75&#8457;</h1>
          <div className='high-low-temp'>
            <h5 className='high-temp'>82&#8457;</h5>
            <h5 className='low-temp'>66&#8457;</h5>
          </div>
        </div>
        <div className='forecast-summary-dropdown'>
          <span className='forecast-summary-title'>Daily Forecast Summary</span>
          <div className='forecast-summary-content'>
            <p>This is today's forecast</p>
          </div>
        </div> */}
  }

}

export default Weather;
