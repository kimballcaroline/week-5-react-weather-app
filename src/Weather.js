import React from "react";
import "./Weather.css";

export default function Weather() {
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
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>

      <div className="weather-details">
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
          alt="Sunny"
          className="icon"
        />
        <div className="temperature">
          <span className="degrees">71</span>
          <span className="units">
            <span className="fahrenheit">°F</span> |{" "}
            <span className="celsius">°C</span>
          </span>
        </div>
        <ul className="conditions">
          <li>Precipitation: 0%</li>
          <li>Humidity: 40%</li>
          <li>Wind: 1 mph</li>
        </ul>
      </div>
      <div className="location-details">
        <h1>Barre, VT</h1>
        <ul>
          <li>Sunday 11:00 AM</li>
          <li>Sunny</li>
        </ul>
      </div>
    </div>
  );
}
