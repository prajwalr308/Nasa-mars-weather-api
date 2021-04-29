import React from 'react';
import logo from './logo.svg';
import './App.css';
import ApiTest from './apitest/ApiTest.';
import MarsWeatherApi from './MarsWeather/MarsWeatherApi';
import RoverPhotosApi from './RoverPhotos/RoverPhotosApi';

function App() {
  return (
    <div className="App">
      <MarsWeatherApi />
      <RoverPhotosApi />
    </div>
  );
}

export default App;
