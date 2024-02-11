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
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <button className="btn btn-primary w-100">Search</button>
          </div>
        </div>
      </form>
      <h1>Karachi</h1>
      <ul>
        <li>Saturday 20:00</li>
        <li>Clear</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="Clear"
              className="float-start"
            />
            <div className="float-start">
              <span className="temperature">26</span>
              <span className="unit">℃</span>
            </div>
          </div>
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
