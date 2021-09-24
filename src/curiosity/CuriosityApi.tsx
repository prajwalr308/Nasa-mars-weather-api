import React, { useEffect, useState } from 'react'
import CuriosityApiCard from './CuriosityApiCard';

const CuriosityApi:React.FC= () => {
    const [weatherData, setweatherData] = useState<object[]>([]);
    var arr:object[]=[];
    var globalWeatherarray:object[]=[];
    useEffect(() => {
        console.log(process.env);
       
       fetch(`https://mars.nasa.gov/rss/api/?feed=weather&category=msl&feedtype=json`).then((res)=>{
          return res.json()
       }).then((data)=>{
            console.log(data);
            arr=data.soles;
            for(let i=0;i<4;i++){
                globalWeatherarray.push(arr[i]);
            }
            console.log(globalWeatherarray);
            setweatherData(globalWeatherarray);
       })
        
    }, [])
    return (
        <div>
            <h1 style={{fontSize:"2em",color:"orange",margin:"20px"}}>Mars weather Data</h1>
           <CuriosityApiCard weatherData={weatherData} />
        </div>
    )
}

export default CuriosityApi
