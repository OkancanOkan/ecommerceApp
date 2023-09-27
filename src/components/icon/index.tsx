import React from 'react';
import './icon.css';

interface IconProps {
  icon: string;
  size?: number;
  variant?: 'orange' | 'black' | 'white';
  onClick: () => void;
}

function Icon({ icon, size = 50, variant = 'black', onClick }: IconProps) {
  return (
    <button onClick={onClick} className="styled-icon-button">
      <img
        style={{ width: size }}
        src={icon}
        alt="icon"
        className={`styled-icon-${variant}`}
      />
    </button>
  );
}

export default Icon;
