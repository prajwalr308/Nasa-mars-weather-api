import React from 'react'
import './solar.css'

const Solar = () => {
    return (
        <div className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black"></div>

            {/* Solar system SVG illustration */}
            <div className="relative z-10 flex flex-col items-center justify-center px-4">
                <div className="w-full max-w-6xl animate-float">
                    <svg viewBox="0 0 800 400" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                        {/* Sun */}
                        <defs>
                            <radialGradient id="sunGradient" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" style={{stopColor: '#FDB813', stopOpacity: 1}} />
                                <stop offset="100%" style={{stopColor: '#FF6B35', stopOpacity: 0.8}} />
                            </radialGradient>
                            <radialGradient id="marsGradient" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" style={{stopColor: '#E57373', stopOpacity: 1}} />
                                <stop offset="100%" style={{stopColor: '#C62828', stopOpacity: 1}} />
                            </radialGradient>
                        </defs>

                        {/* Orbital paths */}
                        <ellipse cx="400" cy="200" rx="80" ry="60" fill="none" stroke="#4A5568" strokeWidth="1" opacity="0.3" />
                        <ellipse cx="400" cy="200" rx="140" ry="100" fill="none" stroke="#4A5568" strokeWidth="1" opacity="0.3" />
                        <ellipse cx="400" cy="200" rx="200" ry="140" fill="none" stroke="#4A5568" strokeWidth="1" opacity="0.3" />
                        <ellipse cx="400" cy="200" rx="270" ry="190" fill="none" stroke="#ED8936" strokeWidth="2" opacity="0.5" />
                        <ellipse cx="400" cy="200" rx="340" ry="240" fill="none" stroke="#4A5568" strokeWidth="1" opacity="0.3" />

                        {/* Sun */}
                        <circle cx="400" cy="200" r="45" fill="url(#sunGradient)">
                            <animate attributeName="r" values="45;48;45" dur="3s" repeatCount="indefinite" />
                        </circle>

                        {/* Mercury */}
                        <circle cx="450" cy="170" r="6" fill="#A0AEC0" />

                        {/* Venus */}
                        <circle cx="320" cy="240" r="10" fill="#F6AD55" />

                        {/* Earth */}
                        <circle cx="500" cy="250" r="12" fill="#4299E1">
                            <animate attributeName="cy" values="250;252;250" dur="2s" repeatCount="indefinite" />
                        </circle>

                        {/* Mars - Highlighted */}
                        <g>
                            <circle cx="600" cy="100" r="18" fill="url(#marsGradient)" stroke="#FF6B6B" strokeWidth="2">
                                <animate attributeName="r" values="18;20;18" dur="2.5s" repeatCount="indefinite" />
                            </circle>
                            {/* Mars polar ice caps */}
                            <ellipse cx="600" cy="95" rx="8" ry="4" fill="#E8F5E9" opacity="0.8" />
                            <ellipse cx="600" cy="105" rx="6" ry="3" fill="#E8F5E9" opacity="0.8" />
                        </g>

                        {/* Jupiter */}
                        <circle cx="250" cy="120" r="28" fill="#D4A373" />
                        <ellipse cx="250" cy="120" rx="28" ry="4" fill="#8B6F47" opacity="0.5" />

                        {/* Saturn */}
                        <g>
                            <ellipse cx="700" cy="280" rx="45" ry="8" fill="#D4A373" opacity="0.3" />
                            <circle cx="700" cy="280" r="22" fill="#E6D5A8" />
                            <ellipse cx="700" cy="280" rx="45" ry="8" fill="none" stroke="#F4E4C1" strokeWidth="2" />
                        </g>

                        {/* Stars */}
                        <circle cx="100" cy="50" r="2" fill="white" opacity="0.8">
                            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="150" cy="100" r="1.5" fill="white" opacity="0.6">
                            <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="650" cy="50" r="2" fill="white" opacity="0.8">
                            <animate attributeName="opacity" values="0.4;1;0.4" dur="2.5s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="700" cy="100" r="1.5" fill="white" opacity="0.6">
                            <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2s" repeatCount="indefinite" />
                        </circle>
                    </svg>
                </div>
                <div className="text-center mt-12 space-y-6">
                    <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 animate-pulse">
                        Mars Explorer
                    </h1>
                    <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto">
                        Journey through real-time Mars weather data, rover photos, and astronomical discoveries
                    </p>
                    <div className="flex justify-center gap-4 pt-6">
                        <a
                            href="#about"
                            className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold rounded-full hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
                        >
                            Explore Now
                        </a>
                        <a
                            href="#weather"
                            className="px-8 py-4 bg-gray-800/50 backdrop-blur-sm text-white font-bold rounded-full hover:bg-gray-700/50 transition-all duration-300 border border-gray-600"
                        >
                            View Weather
                        </a>
                    </div>
                </div>
            </div>

            {/* Animated stars */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                        }}
                    />
                ))}
            </div>
        </div>
    )
}

export default Solar
