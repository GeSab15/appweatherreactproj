import React, { useState } from 'react';
import axios from 'axios';
import ActualDate from './ActualDate'
import './Weather.css';

export default function Weather(props){
  const [wdata, setWdata] = useState({ready:false});
  function handleResponse(response) {
      setWdata({
          ready: true,
          date: new Date(response.data.dt *1000),
          temperature: response.data.main.temp,
          city: response.data.name,
          description: response.data.weather[0].description,
          precipitation: 17,
          humidity: response.data.main.humidity,
          wind: response.data.wind.speed,
          icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
        });
  }
    if (wdata.ready){
        return (
            <div className="Weather">
                <form>
                    <div className="row">
                        <div className="col-9">
                            <input
                            type="search"
                            placeholder="Enter a city..."
                            className="form-control" 
                            />
                        </div>
                        <div className="col-3">
                            <input type="submit" value="Search" className="btn btn-primary" />
                        </div>
                    </div>
                </form>
                <h1>{wdata.city}</h1>
                <ul>
                    <li><ActualDate date={wdata.date} /></li>
                    <li className="text-capitalize">{wdata.description}</li>
                </ul>
                <div className="row">
                    <div className="col-6">
                        <img src={wdata.icon} alt={wdata.description} className="float-left"/>
                        <div className="float-left">
                            <span className="temperature">
                            {Math.round(wdata.temperature)}
                            </span>
                            <span className="unit">
                            °C
                            </span>
                        </div>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>Precipitation: 17%</li>
                            <li>Humidity: {Math.round(wdata.humidity)}%</li>
                            <li>Wind: {Math.round(wdata.wind)}km/hr</li>
                        </ul>
                    </div>
                </div>
            </div>
            );
    } else {
        const apiKey ="8239c94054675b27ae1319054495506d";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return "Loading...";
    }
}