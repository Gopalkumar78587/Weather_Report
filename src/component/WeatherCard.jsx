
export default function WeatherCard({ data, units }) {
  if (!data) return null;

  const {
    name,
    sys: { country } = {},
    weather = [],
    main = {},
    wind = {},
  } = data;

  const description = weather[0]?.description || "—";
  const temp = Math.round(main.temp ?? 0);
  const feelsLike = Math.round(main.feels_like ?? 0);
  const humidity = main.humidity ?? "—";
  const windSpeed = wind.speed ?? "—";
  const icon = weather[0]?.icon;

  const iconUrl = icon
    ? `https://openweathermap.org/img/wn/${icon}@2x.png`
    : null;

  return (
    <div className="card">
      <div className="card-header">
        <h2>
          {name}{country ? `, ${country}` : ""} — {description}
        </h2>
        {iconUrl && <img src={iconUrl} alt={description} />}
      </div>
      <div className="card-body">
        <div className="metric">
          <span className="label">Temperature:</span>
          <span className="value">
            {temp}°{units === "metric" ? "C" : "F"}
          </span>
        </div>
        <div className="metric">
          <span className="label">Feels like:</span>
          <span className="value">
            {feelsLike}°{units === "metric" ? "C" : "F"}
          </span>
        </div>
        <div className="metric">
          <span className="label">Humidity:</span>
          <span className="value">{humidity}%</span>
        </div>
        <div className="metric">
          <span className="label">Wind:</span>
          <span className="value">
            {units === "metric" ? `${windSpeed} m/s` : `${windSpeed} mph`}
          </span>
        </div>
      </div>
    </div>
  );
}
