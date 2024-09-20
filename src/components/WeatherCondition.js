import React from 'react';

const WeatherCondition = ({ condition, icon }) => {
  return (
    <div className="weather-condition">
      <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weather icon"
      />
      {condition}
    </div>
  );
};

export default WeatherCondition;
