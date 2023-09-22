import React, { useState } from 'react';
import './input-button.css';

interface InputButtonProps {
  inputPlaceholder?: string;
  inputValue: string;
  setInputValue: () => void;
  buttonLabel: string;
  onClick: () => void;
  buttonVariant?: 'black' | 'white';
  buttonColour?: 'black' | 'white';
}

const InputButton: React.FC<InputButtonProps> = ({
  inputValue,
  setInputValue,
  inputPlaceholder,
  buttonLabel,
  onClick,
  buttonVariant = 'black',
  buttonColour = 'white',
}) => {
  return (
    <div className="styled-inputButton">
      <input
        className="styled-inputButton-input"
        placeholder={inputPlaceholder}
        onChange={setInputValue}
        value={inputValue}
      />
      <button
        className={`styled-inputButton-button   colour-${buttonColour} variant-${buttonVariant}`}
        onClick={onClick}
      >
        {buttonLabel}
      </button>
    </div>
  );
};

export default InputButton;
