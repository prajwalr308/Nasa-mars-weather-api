import React from 'react';
import logo from './logo.svg';
import './App.css';
import ApiTest from './apitest/ApiTest.';
import MarsWeatherApi from './MarsWeather/MarsWeatherApi';

function App() {
  return (
    <div className="App">
      <MarsWeatherApi />
    </div>
  );
}

export default App;
