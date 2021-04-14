import React from 'react';
import ActualDate from './ActualDate';
import WeatherUnits from './WeatherUnits';

export default function InsideWeather(props) {
    return (
        <div className="InsideWeather">
            <h1>{props.data.city}</h1>
                <ul>
                    <li><ActualDate date={props.data.date} /></li>
                    <li className="text-capitalize">{props.data.description}</li>
                </ul>
                <div className="row">
                    <div className="col-6">
                        <img src={props.data.icon} alt={props.data.description} className="float-left"/>
                        <div className="float-left">
                            <WeatherUnits celsius= {props.data.temperature} />
                        </div>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>Humidity: {Math.round(props.data.humidity)}%</li>
                            <li>Wind: {Math.round(props.data.wind)}km/hr</li>
                        </ul>
                    </div>
                </div>
        </div>
    )

}