import React from 'react'
import './weather.css'

interface Props{
    weatherData:object[];

}
const WeatherCard:React.FC<Props> = ({weatherData}) => {

    
    console.log(weatherData);
    return (
        <div className="marsWeatherCard__parent"> 
           {
               weatherData.map((res:object|any)=>{
                 return(
                    
                    <div key={res.sol_key} className="marsWeatherCard__card">
                    <p>{res.First_UTC}-{res.Last_UTC}</p>
                   <p>season:{res.Season}</p>
                   <p>Month:{res.Month_ordinal}</p>
                   <p>atmospheric pressure:{res.PRE.av}</p>
                </div>
                 )
               
                    
               })
           }
        </div>
    )
}

export default WeatherCard
