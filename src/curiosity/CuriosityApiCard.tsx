import React from 'react'
import './curiosity.css'

interface Props{
    weatherData:object[];

}
const CuriosityApiCard:React.FC<Props> = ({weatherData}) => {

    
    console.log(weatherData);
    return (
        <div className="marsWeatherCard__parent"> 
           {
               weatherData.map((res:object|any)=>{
                 return(
                    
                    <div key={res.id} className="marsWeatherCard__card">
                   <p>date:{res.terrestrial_date}</p>
                   <p>martian days:{res.sol}</p>
                   <p>Max temparature:{res.max_temp}</p>
                   <p>Min temparature:{res.min_temp}</p>
                </div>
                 )
               
                    
               })
           }
        </div>
    )
}

export default CuriosityApiCard
