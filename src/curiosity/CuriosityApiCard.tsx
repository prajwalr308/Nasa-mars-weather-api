import React from 'react'
import './curiosity.css'
import mars from '../assets/mars.png'


interface Props{
    weatherData:object[];

}
const CuriosityApiCard:React.FC<Props> = ({weatherData}) => {

    
    console.log(weatherData);
    return (
        <div id="weather" className="marsWeatherCard__parent"> 
       
           {
               weatherData.map((res:object|any)=>{
                 return(
                    <figure style={{display: 'grid',placeItems:"center"}}  key={res.id} className="bg-gray-100 rounded-xl p-8">
                   <div className="font-bold text-gray-700 rounded-full bg-yellow-500 flex items-center justify-center font-mono " style={{height: "90px", width: "90px", fontSize: "22px",color: "white", }}>{res.sol}</div>
                    <div className="pt-6 text-center space-y-4">
                      <blockquote>
                        <p className="text-lg font-semibold">
                        date:{res.terrestrial_date}
               
                        </p>
                        <p className="text-lg font-semibold">
                     
                        martian days:{res.sol}
                        </p>
                      </blockquote>
                      <figcaption className="font-medium">
                        <div className="text-cyan-600">
                        martian days:{res.sol}
                        </div>
                        <div className="text-gray-500">
                        Max temparature:{res.max_temp}
                        </div>
                        <div className="text-gray-500">
                        Pressure:{res.pressure}
                        </div>
                      </figcaption>
                    </div>
                  </figure>
                    
                //     <div key={res.id} className="marsWeatherCard__card">
                //    <p>date:{res.terrestrial_date}</p>
                //    <p>martian days:{res.sol}</p>
                //    <p>Max temparature:{res.max_temp}</p>
                //    <p>Min temparature:{res.min_temp}</p>
                // </div>
                 )
               
                    
               })
           }
        </div>
    )
}

export default CuriosityApiCard
