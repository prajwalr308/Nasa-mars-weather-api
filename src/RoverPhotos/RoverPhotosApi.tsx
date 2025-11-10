import React, { useEffect, useState } from 'react'
import './rover.css'

interface NASAImageItem {
    href: string;
    data: Array<{
        title: string;
        description: string;
        date_created: string;
        nasa_id: string;
    }>;
    links: Array<{
        href: string;
        rel: string;
        render: string;
    }>;
}

interface NASAImageResponse {
    collection: {
        items: NASAImageItem[];
    };
}

interface RoverPhoto {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    date: string;
}

const RoverPhotosApi: React.FC = () => {
    const [roverPhotos, setRoverPhotos] = useState<RoverPhoto[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRoverPhotos = async () => {
            try {
                setLoading(true);
                setError(null);

                // Use NASA Image and Video Library API for Mars Curiosity rover images
                const response = await fetch(
                    'https://images-api.nasa.gov/search?q=mars%20curiosity%20rover%20surface&media_type=image&year_start=2015'
                );

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data: NASAImageResponse = await response.json();

                if (data.collection.items && data.collection.items.length > 0) {
                    // Transform the data to our format and get first 12 photos
                    const photos: RoverPhoto[] = data.collection.items
                        .filter(item => item.links && item.links.length > 0)
                        .slice(0, 12)
                        .map(item => ({
                            id: item.data[0].nasa_id,
                            title: item.data[0].title,
                            description: item.data[0].description,
                            imageUrl: item.links[0].href,
                            date: new Date(item.data[0].date_created).toLocaleDateString()
                        }));

                    setRoverPhotos(photos);
                } else {
                    throw new Error('No photos found');
                }
            } catch (err) {
                console.error('Error fetching rover photos:', err);
                setError(err instanceof Error ? err.message : 'Failed to fetch rover photos');
            } finally {
                setLoading(false);
            }
        };

        fetchRoverPhotos();
    }, []);

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
                                    src={photo.imageUrl}
                                    alt={photo.title}
                                    className="w-full h-64 object-cover"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                        <p className="text-white font-semibold text-sm line-clamp-2">
                                            {photo.title}
                                        </p>
                                        <p className="text-gray-300 text-xs">
                                            {photo.date}
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
