import React from 'react';
import logo from './logo.svg';
import './App.css';
import ApiTest from './apitest/ApiTest.';
import InsightApi from './Insight/InsightApi';
import RoverPhotosApi from './RoverPhotos/RoverPhotosApi';
import CuriosityApi from './curiosity/CuriosityApi';
import Navbar from './Navbar/Navbar';
import Solar from './Solar/Solar';
import About from './About/About';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Solar />
      <About />
     {/* <InsightApi /> */}
      <RoverPhotosApi />
     
      <CuriosityApi />
    </div>
  );
}

export default App;
