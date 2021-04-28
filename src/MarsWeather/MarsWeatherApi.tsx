import React, { useState,useEffect  } from 'react'
import MarsWeatherCard from './MarsWeatherCard';

interface Crumbs{
    sol_keys:[]
}
const MarsWeatherApi:React.FC = () => {
    const apiKey=process.env.REACT_APP_API_KEY;
    const [weatherData, setWeatherData] = useState<object[]>([]);
    const [solKey, setSolKey] = useState(Array);
    var arr:object[]=[];
    useEffect(() => {
        console.log(process.env);
       
       fetch(`https://api.nasa.gov/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`).then((res)=>{
          return res.json()
       }).then((data)=>{
        Object.keys(data).map(function(key){  
            arr.push({[key]:data[key]})  
        })
           
     
            setSolKey(data.sol_keys);
            console.log(data.sol_keys)
            console.log(arr)
            setWeatherData(arr);
       })
        
    }, [])
    return (
        <div>
          {weatherData? <div>{weatherData.map((data)=>{
              console.log("magic",data)
})}</div>:null}
        </div>
    )
}

export default MarsWeatherApi
