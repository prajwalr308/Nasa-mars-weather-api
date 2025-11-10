import React from "react";

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
            <div className="w-full max-w-md animate-pulse drop-shadow-2xl">
              <svg viewBox="0 0 400 400" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="marsGradientMain" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" style={{stopColor: '#FF7043', stopOpacity: 1}} />
                    <stop offset="50%" style={{stopColor: '#E64A19', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#BF360C', stopOpacity: 1}} />
                  </radialGradient>
                  <radialGradient id="craterGradient" cx="30%" cy="30%" r="50%">
                    <stop offset="0%" style={{stopColor: '#D84315', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#8D3815', stopOpacity: 1}} />
                  </radialGradient>
                </defs>

                {/* Mars planet */}
                <circle cx="200" cy="200" r="150" fill="url(#marsGradientMain)" />

                {/* Polar ice cap */}
                <ellipse cx="200" cy="80" rx="50" ry="25" fill="#E1F5FE" opacity="0.9" />
                <ellipse cx="200" cy="75" rx="40" ry="20" fill="#FFFFFF" opacity="0.7" />

                {/* Surface features and craters */}
                <circle cx="150" cy="180" r="25" fill="url(#craterGradient)" opacity="0.6" />
                <circle cx="250" cy="220" r="35" fill="url(#craterGradient)" opacity="0.5" />
                <circle cx="180" cy="260" r="20" fill="url(#craterGradient)" opacity="0.7" />
                <circle cx="280" cy="160" r="15" fill="url(#craterGradient)" opacity="0.6" />
                <circle cx="220" cy="140" r="18" fill="url(#craterGradient)" opacity="0.5" />

                {/* Valles Marineris - canyon system */}
                <ellipse cx="200" cy="200" rx="80" ry="12" fill="#BF360C" opacity="0.4" transform="rotate(-15 200 200)" />

                {/* Surface texture - small craters */}
                <circle cx="130" cy="240" r="8" fill="#BF360C" opacity="0.4" />
                <circle cx="270" cy="180" r="6" fill="#BF360C" opacity="0.3" />
                <circle cx="160" cy="140" r="7" fill="#BF360C" opacity="0.4" />
                <circle cx="240" cy="280" r="5" fill="#BF360C" opacity="0.3" />

                {/* Dust storm effect */}
                <path d="M 100 200 Q 150 190, 200 195 T 300 200" fill="none" stroke="#FFCCBC" strokeWidth="2" opacity="0.3" />
                <path d="M 120 220 Q 170 215, 220 218 T 280 220" fill="none" stroke="#FFCCBC" strokeWidth="1.5" opacity="0.2" />

                {/* Shadow/terminator line */}
                <path d="M 200 50 Q 350 200 200 350" fill="rgba(0,0,0,0.2)" />

                {/* Atmosphere glow */}
                <circle cx="200" cy="200" r="155" fill="none" stroke="#FF9E80" strokeWidth="3" opacity="0.3" />
                <circle cx="200" cy="200" r="158" fill="none" stroke="#FF6E40" strokeWidth="2" opacity="0.2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
