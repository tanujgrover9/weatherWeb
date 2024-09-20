import React, { useState, useEffect, useCallback } from 'react';
import CityName from './components/CityName';
import CurrentTemperature from './components/CurrentTemperature';
import WeatherCondition from './components/WeatherCondition';
import SearchBox from './components/SearchBox';
import ForecastCard from './components/ForecastCard';
import ErrorHandling from './components/ErrorHandling';
import './styles/App.css';

const API_KEY = '26fb8eea973df3c8306df296ffa2adf9';

const App = () => {
  const [city, setCity] = useState('New York');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [error, setError] = useState('');
  const [unit, setUnit] = useState('metric');

  const fetchWeatherData = useCallback(async () => {
    try {
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${unit}`
      );
      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=${unit}`
      );

      if (!weatherResponse.ok || !forecastResponse.ok) {
        setError('City not found');
        return;
      }

      const weatherData = await weatherResponse.json();
      const forecastData = await forecastResponse.json();

      setWeatherData(weatherData);
      setForecastData(forecastData.list.slice(0, 5)); 
      setError('');
    } catch (err) {
      setError('An error occurred while fetching weather data.');
    }
  }, [city, unit]); 

  useEffect(() => {
    fetchWeatherData();
  }, [fetchWeatherData]);

  return (
    <div className='container'>
    <div className="weather-app">
      <SearchBox setCity={setCity} />
      {error && <ErrorHandling error={error} />}
      {weatherData && (
        <div>
          <CityName name={weatherData.name} />
          <CurrentTemperature temp={weatherData.main.temp} unit={unit} />
          <WeatherCondition condition={weatherData.weather[0].main} icon={weatherData.weather[0].icon} />
        </div>
      )}
      <div className="forecast">
        {forecastData.map((forecast, index) => (
          <ForecastCard key={index} forecast={forecast} unit={unit} />
        ))}
      </div>
      <button onClick={() => setUnit(unit === 'metric' ? 'imperial' : 'metric')}>
        Switch to {unit === 'metric' ? 'Fahrenheit' : 'Celsius'}
      </button>
    </div>
    </div>
  );
};

export default App;
