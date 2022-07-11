import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function celsius() {
    return Math.round(((props.fahrenheitTemp - 32) * 5) / 9);
  }

  if (unit === "fahrenheit") {
    return (
      <div className="temperature">
        <span className="degrees">{props.fahrenheitTemp}</span>
        <span className="units">
          <strong>°F</strong> |{" "}
          <a href="/" onClick={showCelsius}>
            °C
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="temperature">
        <span className="degrees">{celsius()}</span>
        <span className="units">
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>{" "}
          | <strong>°C</strong>
        </span>
      </div>
    );
  }
}
