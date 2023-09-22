import React from 'react';
import './icon.css';

interface IconProps {
  icon: string;
  size?: number;
  variant?: 'orange' | 'black' | 'white';
}

function Icon({ icon, size = 50, variant = 'black' }: IconProps) {
  return (
    <img
      style={{ width: size, color: 'orange' }}
      src={icon}
      alt="icon"
      className={`styled-icon-${variant}`}
    />
  );
}

export default Icon;
