import React from 'react';
import './hyperlinks.css';

interface HyperlinksProps {
  path: string;
  text: string;
}

const Hyperlinks: React.FC<HyperlinksProps> = ({ text, path }) => {
  return (
    <div className="styed-hyperlinks">
      <a className="styled-hyperlinks-link" href={path}>
        {text}
      </a>
    </div>
  );
};

export default Hyperlinks;
