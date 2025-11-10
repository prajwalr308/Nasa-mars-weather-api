import React from "react";
import mars from "../assets/mars.png"

const About = () => {
  return (
    <div id="about" className="w-full py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              Mars Exploration Program
            </h2>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                The Mars Curiosity is a car-sized robotic rover exploring Gale Crater on Mars as part of NASA's Mars Science Laboratory mission.
              </p>
              <p>
                This application provides real-time data from NASA's Open APIs including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li>Current weather conditions on Mars</li>
                <li>Stunning photos captured by the Curiosity Rover</li>
                <li>Daily astronomy pictures and discoveries</li>
                <li>Temperature, pressure, and atmospheric data</li>
              </ul>
              <p>
                All data is sourced from{" "}
                <a
                  href="https://api.nasa.gov/"
                  className="text-blue-400 hover:text-blue-300 font-semibold underline transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  api.nasa.gov
                </a>
                , NASA's official API platform for public data access.
              </p>
            </div>
            <div className="flex gap-4 pt-4">
              <a
                href="https://api.nasa.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore NASA APIs
              </a>
              <a
                href="https://mars.nasa.gov/msl/home/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-all duration-300 border border-gray-600"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={mars}
              alt="Mars"
              className="w-full max-w-md animate-pulse drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
