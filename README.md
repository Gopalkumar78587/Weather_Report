🌦️ Weather Report Mini Project (React + Vite)
A simple, clean, and responsive Weather Report App built using React + Vite.
It allows users to:

Search weather by city name
Get weather using current location (Geolocation)
View temperature, humidity, wind speed, and description
Toggle between °C and °F
See centered UI with a modern gradient background


🚀 Features
✔ Search weather by city
✔ Fetch weather using geolocation (📍 Use My Location)
✔ Displays:

Temperature
Feels Like
Weather Description
Humidity
Wind Speed
Weather Icon

✔ Toggle units (°C / °F)
✔ Fully responsive and centered UI
✔ Clean and minimal design
✔ Built using reusable components:
SearchBar, WeatherCard, UnitToggle

🛠️ Tech Stack

React (Vite)
OpenWeatherMap API
CSS Flexbox for centered layout
Modern React Hooks
(useState, useEffect)


📦 Installation & Setup
1️⃣ Clone the repository
Shellgit clone https://github.com/your-username/weather-report.gitcd weather-reportShow more lines
2️⃣ Install dependencies
Shellnpm installShow more lines
3️⃣ Add API Key
Create a .env file in the project root:
VITE_OPENWEATHER_API_KEY=YOUR_API_KEY_HERE

Get your API key from:
https://openweathermap.org
4️⃣ Start development server
Shellnpm run devShow more lines

📁 Project Structure
src/
│── components/
│   ├── SearchBar.jsx
│   ├── WeatherCard.jsx
│   └── UnitToggle.jsx
│
├── hooks/
│   └── useWeather.js
│
├── utils/
│   └── formatters.js
│
├── App.jsx
├── main.jsx
└── index.css


🌐 API Used
OpenWeatherMap Current Weather API
Endpoint example:
https://api.openweathermap.org/data/2.5/weather?q=Bhubaneswar&units=metric&appid=YOUR_API_KEY


🎨 Styling
The UI is styled with modern CSS:

Radial gradient background
Fully centered layout
Clean card-based weather display
Responsive and lightweight
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
