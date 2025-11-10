import React from 'react'
import './curiosity.css'
import { MarsWeatherData } from '../types'

interface Props {
    weatherData: MarsWeatherData[];
}

const CuriosityApiCard: React.FC<Props> = ({ weatherData }) => {
    return (
        <div id="weather" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weatherData.map((weather) => (
                <div
                    key={weather.id}
                    className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-700 hover:border-orange-500 transition-all duration-300 transform hover:scale-105"
                >
                    {/* Sol Badge */}
                    <div className="flex justify-center mb-4">
                        <div className="h-24 w-24 rounded-full bg-gradient-to-br from-yellow-400 to-orange-600 flex items-center justify-center shadow-lg">
                            <div className="text-center">
                                <p className="text-white font-bold text-2xl">SOL</p>
                                <p className="text-white font-mono text-xl">{weather.sol}</p>
                            </div>
                        </div>
                    </div>

                    {/* Date */}
                    <div className="text-center mb-6">
                        <p className="text-gray-400 text-sm">Earth Date</p>
                        <p className="text-white font-semibold text-lg">{weather.terrestrial_date}</p>
                    </div>

                    {/* Weather Details */}
                    <div className="space-y-3">
                        {/* Temperature */}
                        <div className="flex justify-between items-center bg-gray-800/50 rounded-lg p-3">
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl">🌡️</span>
                                <span className="text-gray-400">Temperature</span>
                            </div>
                            <div className="text-right">
                                <p className="text-orange-400 font-bold">{weather.max_temp}°C</p>
                                <p className="text-blue-400 text-sm">{weather.min_temp}°C</p>
                            </div>
                        </div>

                        {/* Pressure */}
                        <div className="flex justify-between items-center bg-gray-800/50 rounded-lg p-3">
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl">📊</span>
                                <span className="text-gray-400">Pressure</span>
                            </div>
                            <p className="text-cyan-400 font-bold">{weather.pressure} Pa</p>
                        </div>

                        {/* Atmosphere */}
                        <div className="flex justify-between items-center bg-gray-800/50 rounded-lg p-3">
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl">☀️</span>
                                <span className="text-gray-400">Sky</span>
                            </div>
                            <p className="text-yellow-400 font-semibold">{weather.atmo_opacity}</p>
                        </div>

                        {/* Season */}
                        <div className="flex justify-between items-center bg-gray-800/50 rounded-lg p-3">
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl">🍂</span>
                                <span className="text-gray-400">Season</span>
                            </div>
                            <p className="text-green-400 font-semibold">{weather.season}</p>
                        </div>

                        {/* Sunrise/Sunset */}
                        {weather.sunrise && weather.sunset && (
                            <div className="flex justify-between items-center bg-gray-800/50 rounded-lg p-3">
                                <div className="flex items-center space-x-2">
                                    <span className="text-2xl">🌅</span>
                                    <span className="text-gray-400">Day</span>
                                </div>
                                <div className="text-right">
                                    <p className="text-orange-300 text-sm">↑ {weather.sunrise}</p>
                                    <p className="text-purple-300 text-sm">↓ {weather.sunset}</p>
                                </div>
                            </div>
                        )}

                        {/* UV Index */}
                        {weather.local_uv_irradiance_index && (
                            <div className="flex justify-between items-center bg-gray-800/50 rounded-lg p-3">
                                <div className="flex items-center space-x-2">
                                    <span className="text-2xl">☢️</span>
                                    <span className="text-gray-400">UV Index</span>
                                </div>
                                <p className="text-red-400 font-semibold">{weather.local_uv_irradiance_index}</p>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CuriosityApiCard
