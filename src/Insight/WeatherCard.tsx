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
                    <figure key={res.sol_key} className="bg-gray-100 rounded-xl p-8">
                    <img className="w-32 h-32 rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512" />
                    <div className="pt-6 text-center space-y-4">
                      <blockquote>
                        <p className="text-lg font-semibold">
                        {res.First_UTC}-{res.Last_UTC}
                        </p>
                      </blockquote>
                      <figcaption className="font-medium">
                        <div className="text-cyan-600">
                        season:{res.Season}
                        </div>
                        <div className="text-gray-500">
                        Month:{res.Month_ordinal}
                        </div>
                      </figcaption>
                    </div>
                  </figure>
                    
                    /* <div key={res.sol_key} classNameName="marsWeatherCard__card">
                    <p>{res.First_UTC}-{res.Last_UTC}</p>
                   <p>season:{res.Season}</p>
                   <p>Month:{res.Month_ordinal}</p>
                   <p>atmospheric pressure:{res.PRE.av}</p>
                </div> */
                 )
               
                    
               })
           }
        </div>
    )
}

export default WeatherCard
