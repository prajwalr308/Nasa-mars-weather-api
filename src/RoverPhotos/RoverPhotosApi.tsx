import React, { useEffect } from 'react'

const RoverPhotosApi:React.FC = () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    useEffect(() => {
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=10&api_key=${apiKey}`).then((res)=>{
            return res.json()
         }).then((data)=>{
              console.log(data)
         })
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default RoverPhotosApi
