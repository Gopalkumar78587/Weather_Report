export function kelvinToC(k) { return k - 273.15; }
export function capitalize(str = "") {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
export function formatWind(speed, units) {
  return units === "metric" ? `${speed} m/s` : `${speed} mph`;
}
export function iconUrl(icon) {
  return `https://openweathermap.org/img/wn/${icon}@2x.png`;
}
