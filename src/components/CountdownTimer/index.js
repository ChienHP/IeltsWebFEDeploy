import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ initialTime, onTimeExpired }) => {
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(prevTime => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(intervalId);
          onTimeExpired(); // Trigger the callback when time reaches 0
          return 0;
        }
      });
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [onTimeExpired]);

  // Convert seconds to minutes and seconds for display
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  return (
    <div>
      <p>Time Remaining: {`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}</p>
    </div>
  );
};

export default CountdownTimer;
