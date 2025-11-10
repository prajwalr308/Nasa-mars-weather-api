import React from 'react'
import solar from '../assets/solar.png'
import './solar.css'

const Solar = () => {
    return (
        <div className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black"></div>

            {/* Solar system image */}
            <div className="relative z-10 flex flex-col items-center justify-center px-4">
                <img
                    className="w-full max-w-6xl animate-float"
                    src={solar}
                    alt="Solar System"
                />
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
