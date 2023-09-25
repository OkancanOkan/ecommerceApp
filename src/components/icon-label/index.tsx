import React from 'react';
import './icon-label.css';

interface IconLabelProps {
  icon: string;
  size?: number;
  variant?: 'orange' | 'black' | 'white';
  text?: string;
}
const IconLabel: React.FC<IconLabelProps> = ({
  size = 50,
  variant = 'black',
  icon,
  text,
}) => {
  return (
    <div className="styled-iconLabel">
      <img
        style={{ width: size }}
        src={icon}
        alt="icon"
        className={`styled-iconLabel-icon-${variant}`}
      />
      <span className="styled-iconLabel-span">{text}</span>
    </div>
  );
};

export default IconLabel;
