import React, { useEffect, useState } from 'react'
import './rover.css'
import { MarsPhoto, MarsPhotosResponse } from '../types'

const RoverPhotosApi: React.FC = () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const [roverPhotos, setRoverPhotos] = useState<MarsPhoto[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRoverPhotos = async () => {
            try {
                setLoading(true);
                setError(null);

                // Use a recent sol (Martian day) to get recent photos
                const response = await fetch(
                    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=4000&api_key=${apiKey}`
                );

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data: MarsPhotosResponse = await response.json();

                if (data.photos && data.photos.length > 0) {
                    // Get first 12 photos for display
                    setRoverPhotos(data.photos.slice(0, 12));
                } else {
                    // If no photos on sol 4000, try sol 3000
                    const fallbackResponse = await fetch(
                        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=3000&api_key=${apiKey}`
                    );
                    const fallbackData: MarsPhotosResponse = await fallbackResponse.json();
                    setRoverPhotos(fallbackData.photos.slice(0, 12));
                }
            } catch (err) {
                console.error('Error fetching rover photos:', err);
                setError(err instanceof Error ? err.message : 'Failed to fetch rover photos');
            } finally {
                setLoading(false);
            }
        };

        if (apiKey) {
            fetchRoverPhotos();
        } else {
            setError('API key not found');
            setLoading(false);
        }
    }, [apiKey]);

    return (
        <div id="photos" className="w-full py-12 px-4 bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 mb-4">
                        Latest Photos from Curiosity
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Stunning images captured by NASA's Curiosity Rover on Mars
                    </p>
                </div>

                {loading && (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-red-500"></div>
                    </div>
                )}

                {error && (
                    <div className="bg-red-900/30 border border-red-500 rounded-lg p-6 text-center">
                        <p className="text-red-300 text-lg">⚠️ {error}</p>
                        <p className="text-gray-400 mt-2">Unable to load rover photos</p>
                    </div>
                )}

                {!loading && !error && roverPhotos.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {roverPhotos.map((photo) => (
                            <div
                                key={photo.id}
                                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                            >
                                <img
                                    src={photo.img_src}
                                    alt={`Captured by ${photo.camera.full_name}`}
                                    className="w-full h-64 object-cover"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                        <p className="text-white font-semibold text-sm">
                                            {photo.camera.full_name}
                                        </p>
                                        <p className="text-gray-300 text-xs">
                                            Sol {photo.sol} • {photo.earth_date}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default RoverPhotosApi
