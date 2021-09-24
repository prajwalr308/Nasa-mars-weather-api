import React, { useEffect, useState } from 'react'
import './rover.css'

const RoverPhotosApi:React.FC = () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const [roverPhotos, setRoverPhotos] = useState<object[]>([])
    useEffect(() => {
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${apiKey}`).then((res)=>{
            return res.json()
         }).then((data)=>{
             
              setRoverPhotos(data.photos)
              console.log(roverPhotos)
         })
    }, [])
    return (
        <div id="photos" > 
        <h1 style={{fontSize:"2em",color:"orange",margin:"20px"}}>Latest photos from curiosity</h1>
        <div className="rover">
            {roverPhotos.map((photos:object|any)=>{
                return (
                    <img className="rover_images" src={photos.img_src} />
                )
            })}
            </div>
        </div>
    )
}

export default RoverPhotosApi
