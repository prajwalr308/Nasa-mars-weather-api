import React, { useState,useEffect  } from 'react'
import MarsWeatherCard from './MarsWeatherCard';


const MarsWeatherApi:React.FC = () => {
    const apiKey=process.env.REACT_APP_API_KEY;
    const [weatherData, setWeatherData] = useState<object[]>([]);
    const [newData, setNewData] = useState<object[]>([]);
  
    var arr:object[]=[];
    useEffect(() => {
        console.log(process.env);
       
       fetch(`https://api.nasa.gov/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`).then((res)=>{
          return res.json()
       }).then((data)=>{
        Object.keys(data).map(function(key){  
            arr.push({[key]:data[key]})  
        })
        var i=0
        
           for(let i=0;i<arr.length-2;i++){
            var solkey:string|any=data.sol_keys[i];
            const a:object|any =arr[i];
           console.log(a[solkey]) ;
           newData.push(a[solkey]);
        //    setNewData([{
        //        time:a[solkey].First_UTC,
        //     season:a[solkey].Season,

        //    }])
           }
     
     
            console.log("ss",newData)
            
            setWeatherData(arr);
       })
        
    }, [])
    return (
        <div>
          <MarsWeatherCard weatherData={newData}  />
        </div>
    )
}

export default MarsWeatherApi
