import React from 'react';
import './counter-button.css';

interface CounterButtonProps {
  count: number;
  setCount: (count: number) => void;
  border?: boolean;
  fontSize?: number;
  fsIncrement?: number;
  fsDecrement?: number;
}

const CounterButton: React.FC<CounterButtonProps> = ({
  count,
  setCount,
  border = false,
  fontSize = 14,
  fsDecrement = 16,
  fsIncrement = 16,
}) => {
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div
      className={`styled-counterButton ${border ? 'border' : ''}`}
      style={{ fontSize: fontSize }}
    >
      <button
        className="styled-counterButton-decrement"
        onClick={decrement}
        disabled={count === 0}
        style={{ fontSize: fsDecrement }}
      >
        -
      </button>
      <span>{count}</span>
      <button
        className="styled-counterButton-increment"
        style={{ fontSize: fsIncrement }}
        onClick={increment}
      >
        +
      </button>
    </div>
  );
};

export default CounterButton;
