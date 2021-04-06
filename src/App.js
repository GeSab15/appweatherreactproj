import React from 'react';
import Weather from './Weather';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>Weather App</h1>
      <Weather defaultCity="Seoul" />
    <footer>
      Coded by Gerril Lañada.{" "}
    <a href="https://github.com/GeSab15/appweatherreactproj">See the repository.</a>
    </footer>
      </div>
    </div>
  );
}
