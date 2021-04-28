import { useEffect } from "react"


const ApiTest:React.FC = () => {
  const apiKey=process.env.REACT_APP_API_KEY;
 
    useEffect(() => {
        console.log(process.env);
       
       fetch(`https://api.nasa.gov/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`).then((res)=>{
          return res.json()
       }).then((data)=>{
            console.log(data)
       })
        
    }, [])
 
    return (
        <div>
           
            nothing
        </div>
    )
}

export default ApiTest
