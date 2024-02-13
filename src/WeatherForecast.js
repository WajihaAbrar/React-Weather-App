import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";

function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Wed</div>
          <WeatherIcon code="10d" size={36} />
          <div className="forecast-temperatures">
            <span className="max-temperature">20</span>
            <span className="min-temperature">10</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherForecast;
