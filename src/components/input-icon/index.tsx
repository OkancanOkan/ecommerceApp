import React from 'react';
import './input-icon.css';

interface InputIconProps {
  size?: number;
  inputIcon: string;
  variant?: 'white ' | 'black';
  value: string;
  setValue: () => void;
  placeholder?: string;
  onClick: () => void;
  width?: number;
}
const InputIcon: React.FC<InputIconProps> = ({
  size,
  variant,
  inputIcon,
  value,
  setValue,
  placeholder,
  onClick,
  width = 250,
}) => {
  return (
    <div className="styled-inputIcon">
      <input
        style={{ width }}
        className="styled-inputIcon-input"
        value={value}
        onChange={setValue}
        placeholder={placeholder}
      />
      <button className="styled-inputIcon-button" onClick={onClick}>
        <img
          style={{ width: size, color: 'orange' }}
          src={inputIcon}
          alt="icon"
          className={`styled-inputIcon-icon-${variant}`}
        />
      </button>
    </div>
  );
};

export default InputIcon;
