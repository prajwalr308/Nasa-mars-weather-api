// Mars Weather Types
export interface MarsWeatherData {
  id: string;
  terrestrial_date: string;
  sol: string;
  ls: string;
  season: string;
  min_temp: string;
  max_temp: string;
  pressure: string;
  pressure_string: string;
  abs_humidity: string;
  wind_speed: string;
  wind_direction: string;
  atmo_opacity: string;
  sunrise: string;
  sunset: string;
  local_uv_irradiance_index: string;
  min_gts_temp: string;
  max_gts_temp: string;
}

export interface MarsWeatherResponse {
  descriptions: {
    [key: string]: string;
  };
  soles: MarsWeatherData[];
}

// Mars Photos Types
export interface MarsPhoto {
  id: number;
  sol: number;
  camera: {
    id: number;
    name: string;
    rover_id: number;
    full_name: string;
  };
  img_src: string;
  earth_date: string;
  rover: {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
  };
}

export interface MarsPhotosResponse {
  photos: MarsPhoto[];
}

// NASA APOD Types
export interface ApodData {
  date: string;
  explanation: string;
  hdurl?: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
  copyright?: string;
}

// Mars Rover Types
export interface RoverManifest {
  name: string;
  landing_date: string;
  launch_date: string;
  status: string;
  max_sol: number;
  max_date: string;
  total_photos: number;
  photos: {
    sol: number;
    earth_date: string;
    total_photos: number;
    cameras: string[];
  }[];
}
