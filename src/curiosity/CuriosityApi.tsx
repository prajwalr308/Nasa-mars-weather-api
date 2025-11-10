import React, { useEffect, useState } from 'react'
import CuriosityApiCard from './CuriosityApiCard';
import { MarsWeatherData, MarsWeatherResponse } from '../types';

const CuriosityApi: React.FC = () => {
    const [weatherData, setWeatherData] = useState<MarsWeatherData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch(
                    `https://mars.nasa.gov/rss/api/?feed=weather&category=msl&feedtype=json`
                );

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data: MarsWeatherResponse = await response.json();

                if (data.soles && data.soles.length > 0) {
                    // Get the most recent 7 days of weather data
                    const recentWeather = data.soles.slice(0, 7);
                    setWeatherData(recentWeather);
                } else {
                    throw new Error('No weather data available');
                }
            } catch (err) {
                console.error('Error fetching Mars weather:', err);
                setError(err instanceof Error ? err.message : 'Failed to fetch weather data');
            } finally {
                setLoading(false);
            }
        };

        fetchWeatherData();
    }, []);

    return (
        <div className="w-full py-12 px-4 bg-gradient-to-b from-gray-900 to-black">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 mb-4">
                        Mars Weather Data
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Real-time weather data from Curiosity Rover
                    </p>
                </div>

                {loading && (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-orange-500"></div>
                    </div>
                )}

                {error && (
                    <div className="bg-red-900/30 border border-red-500 rounded-lg p-6 text-center">
                        <p className="text-red-300 text-lg">⚠️ {error}</p>
                        <p className="text-gray-400 mt-2">Please try again later</p>
                    </div>
                )}

                {!loading && !error && weatherData.length > 0 && (
                    <CuriosityApiCard weatherData={weatherData} />
                )}
            </div>
        </div>
    )
}

export default CuriosityApi
