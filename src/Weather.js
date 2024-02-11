import React from "react";
import "./Weather.css";

function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <button class="btn btn-primary">Search</button>
          </div>
        </div>
      </form>
      <h1>Karachi</h1>
      <ul>
        <li>Saturday 20:00</li>
        <li>Clear</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Clear"
          />{" "}
          23℃
        </div>
        <div className="col-6">
          <ul>
            <li>Percipitation: 0%</li>
            <li>Humidity: 55%</li>
            <li>Wind: 7km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Weather;
