// src/components/DashboardPage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';

const DashboardPage = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const apiKey = '6d74691bf20c3ef5915cff1223650b13';
        const city = 'Pollachi';
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        setWeather(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    getWeather();
  }, []);

  return (
    <div className="dashboard-container">
      <h1 className="fade-in">🌤️ Welcome to Weather Dashboard</h1>
      {weather ? (
        <div className="weather-card slide-up">
          <h2>{weather.name}</h2>
          <p>🌡️ Temperature: {weather.main.temp}°C</p>
          <p>☁️ Condition: {weather.weather[0].description}</p>
          <p>💨 Wind: {weather.wind.speed} m/s</p>
        </div>
      ) : (
        <p className="fade-in">Loading weather data...</p>
      )}
    </div>
  );
};

export default DashboardPage;
