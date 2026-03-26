import { useEffect, useState } from "react";

const BASE_URL = "https://api.openweathermap.org/data/2.5";

export function useWeather({ query, units = "metric", useGeo = false }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchWeatherByCity() {
      if (!query || query.trim().length < 2) return;
      setLoading(true);
      setError("");
      setData(null);
      try {
        const url = `${BASE_URL}/weather?q=${encodeURIComponent(
          query
        )}&units=${units}&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}`;
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`Unable to fetch weather for "${query}".`);
        }
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err.message || "Something went wrong.");
      } finally {
        setLoading(false);
      }
    }

    async function fetchWeatherByGeo() {
      if (!useGeo) return;
      setLoading(true);
      setError("");
      setData(null);
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          try {
            const { latitude, longitude } = pos.coords;
            const url = `${BASE_URL}/weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}`;
            const res = await fetch(url);
            if (!res.ok) throw new Error("Unable to fetch weather for location.");
            const json = await res.json();
            setData(json);
          } catch (err) {
            setError(err.message || "Failed to fetch geolocation weather.");
          } finally {
            setLoading(false);
          }
        },
        (geoErr) => {
          setError(geoErr.message || "Geolocation permission denied.");
          setLoading(false);
        },
        { enableHighAccuracy: false, timeout: 10000 }
      );
    }

    if (useGeo) {
      fetchWeatherByGeo();
    } else {
      fetchWeatherByCity();
    }
  }, [query, units, useGeo]);

  return { data, loading, error };
}
``
