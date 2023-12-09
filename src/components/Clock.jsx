import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update the time every second (1000 milliseconds)

    // Clean up the interval to prevent memory leaks
    return () => clearInterval(timer);
  }, []);

  const formattedTime = currentDateTime.toLocaleTimeString();
  const formattedDate = currentDateTime.toLocaleDateString();

  return (
    <div>
      <p className='currentTime'>{formattedDate} {formattedTime}</p>
    </div>
  );
};

export default Clock;
