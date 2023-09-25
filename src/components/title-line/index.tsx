import React from 'react';
import './title-line.css';

interface TitleLineProps {
  text?: string;
  href?: string;
  offer?: boolean;
  spanText?: string;
  linecenter?: boolean;
}

const TitleLine: React.FC<TitleLineProps> = ({
  text,
  href,
  offer = false,
  spanText,
  linecenter,
}) => {
  return (
    <div className="styled-titleLine">
      <h2 className="styled-titleLine-header">
        <a
          className={
            linecenter === true
              ? 'styled-titleLine-center'
              : 'styled-titleLine-a'
          }
          href={href}
        >
          {text}
        </a>
        {offer && <span className="styled-titleLine-span">{spanText}</span>}
      </h2>
    </div>
  );
};

export default TitleLine;
