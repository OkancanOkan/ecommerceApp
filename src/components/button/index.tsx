import React from 'react';
import '../button/button.css';
import { LeftArrowIcon, RightArrowIcon } from '../../assets/icons/icon';

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'black' | 'white';
  icon?: 'leftArrow' | 'rightArrow';
  iconLeft?: boolean;
  size?: 'small' | 'medium' | 'large';
  width?: number;
  maxWidth?: boolean;
  colour?: 'black' | 'white';
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'black',
  icon,
  iconLeft = false,
  size = 'medium',
  width,
  maxWidth = false,
  colour = 'white',
}) => {
  const iconComponent = {
    leftArrow: <LeftArrowIcon />,
    rightArrow: <RightArrowIcon />,
  }[icon || 'leftArrow'];
  return (
    <button
      style={{ width: width }}
      className={`styled-button ${
        maxWidth ? 'maxWidth' : ''
      } size-${size} colour-${colour} variant-${variant}`}
      onClick={onClick}
    >
      {icon && iconLeft && (
        <span className="styled-button-icon">{iconComponent}</span>
      )}
      {label}
      {icon && !iconLeft && (
        <span className="styled-button-icon">{iconComponent}</span>
      )}
    </button>
  );
};
