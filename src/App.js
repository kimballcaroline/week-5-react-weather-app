import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultZipCode="02118" />
      </div>
      <footer>
        This project was coded by Caroline Kimball and is{" "}
        <a
          href="https://github.com/kimballcaroline/week-5-react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on Github
        </a>
      </footer>
    </div>
  );
}
