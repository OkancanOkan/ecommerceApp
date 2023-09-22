import React from "react";
import "./input.css";

interface InputProps {
  placeholder?: string;
  value: string;
  setValue: () => void;
}
const Input: React.FC<InputProps> = ({ placeholder, value, setValue }) => {
  return (
    <div className="styled-input">
      <input
        className="styled-input-form"
        placeholder={placeholder}
        value={value}
        onChange={setValue}
      />
    </div>
  );
};

export default Input;
