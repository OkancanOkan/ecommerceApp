import React, { useState, useEffect } from 'react';
import './timer.css';

interface TimerProps {
  targetDate: Date;
}

const Timer: React.FC<TimerProps> = ({ targetDate }) => {
  const calculateTimeRemaining = () => {
    const currentTime = new Date();
    const timeRemaining = targetDate.getTime() - currentTime.getTime();
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  return (
    <div className="styled-timer">
      <div className="styled-timer-clock">
        <h4 className="styled-timer-number-header">{timeRemaining.days}</h4>
        <span className="styled-timer-number-span">DAYS</span>
      </div>
      <div className="styled-timer-clock">
        <h4 className="styled-timer-number-header">{timeRemaining.hours}</h4>
        <span className="styled-timer-number-span">HOURS</span>
      </div>
      <div className="styled-timer-clock">
        <h4 className="styled-timer-number-header">{timeRemaining.minutes}</h4>
        <span className="styled-timer-number-span">MINTS</span>
      </div>
      <div className="styled-timer-clock-last">
        <h4 className="styled-timer-number-header">{timeRemaining.seconds}</h4>
        <span className="styled-timer-number-span">SECS</span>
      </div>
    </div>
  );
};

export default Timer;
