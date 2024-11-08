import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

import "./Weather.css";

function Weather(props) {
  const [city, setCity] = useState(props.city);
  const [weatherData, setWeatherData] = useState({ apicall: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      apicall: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
    });
  }

  function search() {
    //const apiKey = "58a6775f97527351bf6c6966e209be39";
    const apiKey = "ca5af28648d86b7925348bb9fb85cd3a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
    // .catch((error) => {
    //   console.error("API request error:", error);
    // });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityInput(event) {
    setCity(event.target.value);
  }
  if (weatherData.apicall) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-8 col-lg-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityInput}
              />
            </div>
            <div className="col-4 col-lg-3">
              <button className="btn btn-info w-100">Search</button>
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading Weather Forecast....";
  }
}

export default Weather;
