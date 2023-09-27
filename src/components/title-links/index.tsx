import React from 'react';
import './title-links.css';

interface TitleLinksProps {
  title: string;
  linkPath?: string;
  items: string[];
}

const TitleLinks: React.FC<TitleLinksProps> = ({ title, linkPath, items }) => {
  return (
    <div className="styled-titleLink">
      <h2 className="styled-titleLink-header">{title}</h2>
      <ul className="styled-titleLink-ul">
        {items.map((item, index) => (
          <li key={index} className="styled-titleLink-listItem">
            <a href={linkPath} className="styled-titleLink-linkedItem">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TitleLinks;
