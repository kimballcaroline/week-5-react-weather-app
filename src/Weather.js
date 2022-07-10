import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      feels_like: Math.round(response.data.main.feels_like),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter your zip code"
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
            src={weatherData.iconUrl}
            alt={weatherData.description}
            className="icon"
          />
          <div className="temperature">
            <span className="degrees">{weatherData.temperature}</span>
            <span className="units">
              <span className="fahrenheit">°F</span> |{" "}
              <span className="celsius">°C</span>
            </span>
          </div>
          <ul className="conditions">
            <li>Feels Like: {weatherData.feels_like}°F</li>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} mph</li>
          </ul>
        </div>
        <div className="location-details">
          <h1>{weatherData.city}</h1>
          <ul>
            <li>
              <FormattedDate date={weatherData.date} />
            </li>
            <li className="text-capitalize">{weatherData.description}</li>
          </ul>
        </div>
      </div>
    );
  } else {
    const apiKey = "5dcc733dee2af67c15c4b1d641ad43db";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${props.defaultZipCode}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
