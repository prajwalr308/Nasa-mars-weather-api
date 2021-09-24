import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";


const InsightApi: React.FC = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [weatherData, setWeatherData] = useState<object[]>([]);
  const [stateCheck, setStateCheck] = useState<object[]>([]);

  var arr: object[] = [];
  var globalWeatherarray: object[] = [];
  useEffect(() => {
    console.log(process.env);

    fetch(
      `https://api.nasa.gov/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`
    )
      .then((res) => res.json())
      
      .then((data) => {
        
        Object.keys(data).map(function (key) {
          arr.push({ [key]: data[key] });
        });
      

        for (let i = 0; i < arr.length - 2; i++) {
          var solkey: string | any = data.sol_keys[i];
          const newArray: object | any = arr[i];
          console.log(newArray[solkey]);
          newArray[solkey].sol_key = solkey;
          globalWeatherarray.push(newArray[solkey]);
          
        }
        setWeatherData(globalWeatherarray)
      });
  }, []);
  return (
    <div>
      <h1>Mars weather info</h1>
      <WeatherCard weatherData={weatherData} />
    </div>
  );
};

export default InsightApi;
