import React from 'react';
import logo from './logo.svg';
import './App.css';
import ApiTest from './apitest/ApiTest.';
import InsightApi from './Insight/InsightApi';
import RoverPhotosApi from './RoverPhotos/RoverPhotosApi';
import CuriosityApi from './curiosity/CuriosityApi';


function App() {
  return (
    <div className="App">
     <InsightApi />
      <RoverPhotosApi />
      <ApiTest />
      <CuriosityApi />
    </div>
  );
}

export default App;
