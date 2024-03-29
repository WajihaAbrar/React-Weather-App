import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather city="London" />
        <footer>
          The project was coded by{" "}
          <a
            href="https://github.com/WajihaAbrar"
            target="_blank"
            rel="noreferrer"
          >
            Wajiha Abrar
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/WajihaAbrar/React-Weather-App"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://weather-forecast-app-react.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
