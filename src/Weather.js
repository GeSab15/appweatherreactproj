import React, { useState } from 'react';
import axios from 'axios';
import InsideWeather from './InsideWeather';
import Forecast from './Forecast';
import './Weather.css';

export default function Weather(props){
  const [wdata, setWdata] = useState({ready:false});
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
      setWdata({
          ready: true,
          date: new Date(response.data.dt *1000),
          temperature: response.data.main.temp,
          city: response.data.name,
          coordinates: response.data.coord,
          description: response.data.weather[0].description,
          precipitation: 17,
          humidity: response.data.main.humidity,
          wind: response.data.wind.speed,
          icon: response.data.weather[0].icon
        });
  }
  function change(){
    const apiKey ="8239c94054675b27ae1319054495506d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

  }

  function startSearch(event){
    event.preventDefault();
    change();
  }

  function newCity(event){
    setCity(event.target.value);
  }

    if (wdata.ready){
      return (
        <div className="Weather">
          <form onSubmit={startSearch}>
            <div className="row">
              <div className="col-9">
                <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                onChange={newCity} 
                  />
              </div>
              <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary w-100" />
              </div>
            </div>
          </form>
          <InsideWeather data={wdata} />
          <Forecast coordinates={wdata.coordinates}/>
        </div>
      );
    } else {
      change();
      return "Loading...";
    }
}