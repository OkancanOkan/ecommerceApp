import React from 'react';

interface TextAreaProps {
  placeholder?: string;
  label?: string;
  value: string;
  name?: string;
  maxWidth?: boolean;
  height?: number;
  onChange: () => void;
  backgroundColor?: 'white' | 'gray';
}
const TextArea: React.FC<TextAreaProps> = ({
  placeholder,
  label,
  value,
  name,
  height = 150,
  maxWidth = false,
  onChange,
  backgroundColor = 'white',
}) => {
  return (
    <div className={`styled-textArea ${maxWidth ? 'maxWidth' : ''}`}>
      {label && <label className="styled-textArea-label">{label}</label>}
      <textarea
        className={`styled-textArea-form backgroundColor-${backgroundColor}`}
        style={{ height }}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default TextArea;
