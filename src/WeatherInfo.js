import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <div className="weather-details">
        <img
          src={props.data.iconUrl}
          alt={props.data.description}
          className="icon"
        />
        <div className="temperature">
          <span className="degrees">{props.data.temperature}</span>
          <span className="units">
            <span className="fahrenheit">°F</span> |{" "}
            <span className="celsius">°C</span>
          </span>
        </div>
        <ul className="conditions">
          <li>Feels Like: {props.data.feels_like}°F</li>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {props.data.wind} mph</li>
        </ul>
      </div>
      <div className="location-details">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
      </div>
    </div>
  );
}
