import React from 'react';
import Weather from './Weather';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="Seoul" />
    <footer>
      Coded by Gerril Lañada. Hosted on Netlify.{" "}
    <a href="https://github.com/GeSab15/appweatherreactproj" rel="noopenner noreferrer">See the repository.</a>
    </footer>
      </div>
    </div>
  );
}
