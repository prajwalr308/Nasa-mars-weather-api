import React, { useEffect, useState } from 'react'
import { ApodData } from '../types'

const APOD: React.FC = () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const [apodData, setApodData] = useState<ApodData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAPOD = async () => {
            try {
                setLoading(true);
                setError(null);

                // Set a timeout for the API request
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

                const response = await fetch(
                    `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`,
                    { signal: controller.signal }
                );

                clearTimeout(timeoutId);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data: ApodData = await response.json();
                setApodData(data);
            } catch (err) {
                console.error('Error fetching APOD:', err);
                if (err instanceof Error) {
                    if (err.name === 'AbortError') {
                        setError('Request timeout - NASA API is taking too long to respond. Please try again later.');
                    } else {
                        setError(err.message);
                    }
                } else {
                    setError('Failed to fetch Astronomy Picture of the Day. The NASA API may be temporarily unavailable.');
                }
            } finally {
                setLoading(false);
            }
        };

        if (apiKey) {
            fetchAPOD();
        } else {
            setError('API key not found');
            setLoading(false);
        }
    }, [apiKey]);

    return (
        <div className="w-full py-12 px-4 bg-gradient-to-b from-black to-gray-900">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
                        Astronomy Picture of the Day
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Discover the cosmos! Each day a different image or photograph of our fascinating universe
                    </p>
                </div>

                {loading && (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
                    </div>
                )}

                {error && (
                    <div className="bg-red-900/30 border border-red-500 rounded-lg p-6 text-center">
                        <p className="text-red-300 text-lg">⚠️ {error}</p>
                        <p className="text-gray-400 mt-2">Unable to load today's astronomy picture</p>
                    </div>
                )}

                {!loading && !error && apodData && (
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
                        <div className="grid md:grid-cols-2 gap-0">
                            {/* Image/Video Section */}
                            <div className="relative h-96 md:h-auto">
                                {apodData.media_type === 'image' ? (
                                    <img
                                        src={apodData.hdurl || apodData.url}
                                        alt={apodData.title}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <iframe
                                        src={apodData.url}
                                        title={apodData.title}
                                        className="w-full h-full"
                                        frameBorder="0"
                                        allowFullScreen
                                    />
                                )}
                            </div>

                            {/* Content Section */}
                            <div className="p-8 flex flex-col justify-center">
                                <div className="mb-6">
                                    <h2 className="text-3xl font-bold text-white mb-2">
                                        {apodData.title}
                                    </h2>
                                    <p className="text-gray-400 text-sm">
                                        📅 {apodData.date}
                                    </p>
                                    {apodData.copyright && (
                                        <p className="text-gray-500 text-sm mt-1">
                                            📷 © {apodData.copyright}
                                        </p>
                                    )}
                                </div>

                                <div className="text-gray-300 leading-relaxed mb-6 max-h-96 overflow-y-auto">
                                    <p>{apodData.explanation}</p>
                                </div>

                                {apodData.hdurl && (
                                    <a
                                        href={apodData.hdurl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                                    >
                                        View HD Image
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default APOD
