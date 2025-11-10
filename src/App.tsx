import React from 'react';
import './App.css';
import RoverPhotosApi from './RoverPhotos/RoverPhotosApi';
import CuriosityApi from './curiosity/CuriosityApi';
import Navbar from './Navbar/Navbar';
import Solar from './Solar/Solar';
import About from './About/About';
import APOD from './APOD/APOD';

function App() {
  return (
    <div className="App bg-black min-h-screen">
      <Navbar />
      <Solar />
      <About />
      <APOD />
      <RoverPhotosApi />
      <CuriosityApi />

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 mb-2">
            Data provided by NASA's Open APIs
          </p>
          <p className="text-gray-500 text-sm">
            Mars Exploration • Curiosity Rover • Astronomy
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
