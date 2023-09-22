import React from 'react';
import './textArea.css';

interface TextAreaProps {
  placeholder?: string;
  value: string;
  maxWidth?: boolean;
  height?: number;
  width?: number;
  onChange: () => void;
  backgroundColor?: 'white' | 'gray';
}
const TextArea: React.FC<TextAreaProps> = ({
  placeholder,
  value,
  height = 150,
  width = 350,
  maxWidth = false,
  onChange,
  backgroundColor = 'white',
}) => {
  return (
    <div className={`styled-textArea ${maxWidth ? 'maxWidth' : ''}`}>
      <textarea
        className={`styled-textArea-form backgroundColor-${backgroundColor}`}
        style={{ height: height, width: width }}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default TextArea;
