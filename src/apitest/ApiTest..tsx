import { useEffect } from "react"


const ApiTest:React.FC = () => {
  const apiKey=process.env.REACT_APP_API_KEY;
 
    useEffect(() => {
        console.log(process.env);
       
       fetch(`https://mars.nasa.gov/rss/api/?feed=weather&category=msl&feedtype=json`).then((res)=>{
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
