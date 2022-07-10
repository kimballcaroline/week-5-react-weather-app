import React from "react";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg",
    "01n":
      "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-night.svg",
    "02d":
      "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day.svg",
    "02n":
      "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-night.svg",
    "03d": "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/cloudy.svg",
    "03n": "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/cloudy.svg",
    "04d": "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast.svg",
    "04n": "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast.svg",
    "09d":
      "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day-drizzle.svg",
    "09n":
      "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-night-drizzle.svg",
    "10d":
      "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day-rain.svg",
    "10n":
      "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-night-rain.svg",
    "11d":
      "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thunderstorms-day.svg",
    "11n":
      "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thunderstorms-night.svg",
    "13d": "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/snow.svg",
    "13n": "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/snow.svg",
    "50d": "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/fog.svg",
    "50n": "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/fog.svg",
  };

  return <img src={codeMapping[props.code]} alt={props.alt} className="icon" />;
}
