import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <div className="weather-details">
        <WeatherIcon code={props.data.icon} alt={props.data.description} />
        <WeatherTemperature fahrenheitTemp={props.data.temperature} />
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
