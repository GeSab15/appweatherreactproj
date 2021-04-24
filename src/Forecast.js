import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ForecastDay from './ForecastDay';
import './Forecast.css';

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [daily, setDaily] = useState(null);

  useEffect (() => {
    setLoaded(false);
  }, [props.coordinates]);


  function handleResponse(response) {
    setDaily(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
    <div className="Forecast">
      <div className="row">
        {daily.map(function(dailyForecast, index) {
          if (index < 6) {
            return (
              <div className="col" key={index}>
                <ForecastDay data={dailyForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
  } else {
  let apiKey = "8239c94054675b27ae1319054495506d";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return null;
  }
};