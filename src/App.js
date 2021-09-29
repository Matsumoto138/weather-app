import React, {useState} from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Cards from './components/Cards';
function App() {

  const[search, setSearch] = useState("")
  const [weather, setWeather] = useState([])

  const getWeather = (e) =>{
    e.preventDefault();
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=b4e3266d350a4f0f982121147212309&q=${search}&days=3&aqi=no&alerts=no`)
      .then(res=>res.json())
      .then(data=>{
        setWeather(data.forecast.forecastday)
        console.log(data.forecast.forecastday)
      })
  }

  return (
    <div className="App">
      <h1>Weather App</h1>
      <h2>Please Enter Your City</h2>
      <SearchBar search={search} setSearch={setSearch} getWeather={getWeather} />
      <div className="component-container">
      
      {weather.map((data)=>{
        return(
          <Cards data={data} />
        )
      })}
      </div>
      
    </div>
  );
}

export default App;
