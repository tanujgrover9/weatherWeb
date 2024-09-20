import React from 'react';

const CurrentTemperature = ({ temp, unit }) => {
  return (
    <div className="temperature">
      {temp}° {unit === 'metric' ? 'C' : 'F'}
    </div>
  );
};

export default CurrentTemperature;
