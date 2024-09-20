import React from 'react';

const ForecastCard = ({ forecast, unit }) => {
  const day = new Date(forecast.dt * 1000).toLocaleDateString('en-US', {
    weekday: 'long',
  });

  return (
    <div className="forecast-card">
      <h4>{day}</h4>
      <p>High: {forecast.main.temp_max}° {unit === 'metric' ? 'C' : 'F'}</p>
      <p>Low: {forecast.main.temp_min}° {unit === 'metric' ? 'C' : 'F'}</p>
      <img
        src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
        alt="weather icon"
      />
    </div>
  );
};

export default ForecastCard;
