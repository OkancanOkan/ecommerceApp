import React from 'react';
import './badge.css';

interface BadgeProps {
  badgeStyleCircle?: boolean;
  text?: string;
  circleColour?: 'orange' | 'aqua' | 'black';
}
const Badge: React.FC<BadgeProps> = ({
  badgeStyleCircle = false,
  text,
  circleColour = 'orange',
}) => {
  return (
    <div className="styled-badge">
      <span
        className={`styled-badge ${
          badgeStyleCircle ? 'circle' : 'square'
        } colour-${circleColour} `}
      >
        {text}
      </span>
    </div>
  );
};

export default Badge;
