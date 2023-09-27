import React from 'react';
import './icon-title-subtitle.css';

interface IconTitleSubtitleProps {
  icon: string;
  size?: number;
  variant?: 'orange' | 'black' | 'white';
  title?: string;
  subtitle?: string;
}

const IconTitleSubtitle: React.FC<IconTitleSubtitleProps> = ({
  title,
  icon,
  size = 25,
  variant = 'black',
  subtitle,
}) => {
  return (
    <div className="styled-iconTitleSubtitle">
      <div className="styled-iconTitleSubtitle-title">
        <img
          style={{ width: size }}
          src={icon}
          alt="icon"
          className={`styled-iconTitleSubtitle-icon-${variant}`}
        />
        <span className="styled-iconTitleSubtitle-span">{title}</span>
      </div>
      <div className="styled-iconTitlwSubtitle-subtitle">
        <span className="styled-iconTitleSubtitle-subtitleSpan">
          {subtitle}
        </span>
      </div>
    </div>
  );
};

export default IconTitleSubtitle;
