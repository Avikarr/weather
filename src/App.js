import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react";
import './App.css';

function App() {

  const apiKey = "f56f24967aaf51182d1d4df628297c6d"
  const [inputCity, setInputCity] = useState("")
  const [data, setData] = useState({})


  const getWeatherDetails = (cityName) => {
    if (!cityName) return
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
    axios.get(apiURL).then((res) => {
      console.log("response", res.data)
      setData(res.data)
    }).catch((err) => {
      console.log("err", err)
    })
  }


  const handleChangeInput = (e) => {
    console.log("value", e.target.value)
    setInputCity(e.target.value)
  }


const handleSearch = () => {
  getWeatherDetails(inputCity)
}

  useEffect(() =>  {

     getWeatherDetails("mumbai")

  }, [])


  return (
    <div className="col-md-12" >
      <div className="weatherBg">
        <h1 className="heading">Weather App</h1>


          <div className="d-grid gap-3 col-md-4 mt-3">
            <input type="text" className="form-control" onChange={handleChangeInput} />
              <button className="btn btn-primary" type="button" value={inputCity} onClick={handleSearch}>Search</button>
          </div>
        </div>



     <div className="col-md-12 text-center mt-5">
      <div className="shadow rounded weatherResultBox">
         <img className="icon" 
         src="https://cdn-icons-png.flaticon.com/512/831/831268.png?w=740&t=st=1678029911~exp=1678030511~hmac=973669ec9c808fec4cb341d0b0b9c0eec056ec5aa6a8f4440fbed6aa45ed4ca4"></img>

         <h5  className="weatherCity">{data?.name}</h5>
         <h6 className="weatherTemp">{((data?.main?.temp)-273.15).toFixed(2)}°C</h6>
       </div>
      </div>   
    </div>
  );
}

export default App;
