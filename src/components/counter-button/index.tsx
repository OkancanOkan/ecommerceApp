import React from 'react';
import './counter-button.css';

interface CounterButtonProps {
  count: number;
  setCount: (count: number) => void;
}

const CounterButton: React.FC<CounterButtonProps> = ({ count, setCount }) => {
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="styled-counterButton">
      <button
        className="styled-counterButton-decrement"
        onClick={decrement}
        disabled={count === 0}
      >
        -
      </button>
      <span>{count}</span>
      <button className="styled-counterButton-increment" onClick={increment}>
        +
      </button>
    </div>
  );
};

export default CounterButton;
