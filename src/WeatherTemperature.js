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
          <span className="bold">°F</span> |{" "}
          <a href="/" className="text-decoration-none" onClick={showCelsius}>
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
          <a href="/" className="text-decoration-none" onClick={showFahrenheit}>
            °F
          </a>{" "}
          | <span className="bold">°C</span>
        </span>
      </div>
    );
  }
}
