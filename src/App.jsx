import { useState } from "react";

import SearchBar from "./component/SearchBar.jsx";
import WeatherCard from "./component/WeatherCard.jsx";
import UnitToggle from "./component/UnitToggle.jsx";

import { useWeather } from "./hooks/useWeather";
import "./index.css";

export default function App() {
  const [city, setCity] = useState("Bhubaneswar");
  const [units, setUnits] = useState("metric");
  const [useGeo, setUseGeo] = useState(false);

  const { data, loading, error } = useWeather({ query: city, units, useGeo });

  const handleSearch = (newCity) => {
    setUseGeo(false);
    setCity(newCity || "Bhubaneswar");
  };

  const handleUseLocation = () => {
    setUseGeo(true);
  };

  return (
    <div className="container">
      <header>
        <h1>Weather Report</h1>
        <p className="subtitle">Quick, clean weather for any city 🔍</p>
      </header>

      <div className="controls">
        <SearchBar onSearch={handleSearch} initialValue={city} />
        <UnitToggle units={units} onChange={setUnits} />
        <button className="geo-btn" onClick={handleUseLocation}>
          📍 Use my location
        </button>
      </div>

      {loading && <div className="status">Loading…</div>}
      {error && <div className="status error">{error}</div>}
      {!loading && !error && <WeatherCard data={data} units={units} />}

      <footer>
        <small>
          Data from OpenWeatherMap • Built by Gopal with React ⚛️
        </small>
      </footer>
    </div>
  );
}
