import React from 'react';
import './title-subtitle.css';

interface TitleSubtitleProps {
  children: React.ReactNode;
  title: string;
  alignCenter?: boolean;
}

const TitleSubtitle: React.FC<TitleSubtitleProps> = ({
  children,
  title,
  alignCenter = false,
}) => {
  return (
    <div className={`styled-titleSubtitle ${alignCenter ? 'textAlign' : ''}`}>
      <h2 className="styled-titleSubtitle-header">{title}</h2>
      <div className="styled-titleSubtitle-sub">{children}</div>
    </div>
  );
};

export default TitleSubtitle;
