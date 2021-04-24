import React from 'react';
import WIcon from './WIcon';

export default function ForecastDay(props) {
  function maxTemp() {
    let temp = Math.round(props.data.temp.max);
    return `${temp}°C`;
  }

  function minTemp() {
    let temp = Math.round(props.data.temp.min);
    return `${temp}°C`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

    return days[day];
  }

  return (
  <div className="col">
    <div className="Forecast-day">{day()}</div>
      <div className="Forecast-icon"><WIcon code={props.data.weather[0].icon} size={26} /></div>
      <div className="Forecast-temp">
        <span className="Forecast-temp-max">{maxTemp()}</span>
        <span className="Forecast-temp-min">{minTemp()}</span>
    </div>
  </div>
  );
}