import React from 'react';
import './breadcrumb.css';

interface BreadcrumbProps {
  items: { label: string; link?: string }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <div className='styled-breadcrumb'>
      <ul className="styled-breadcrumb-ul">
        {items.map((item, index) => (
          <li className="styled-breadcrumb-item" key={index}>
            {item.link ? (
              <a href={item.link}>{item.label}</a>
            ) : (
              <span>{item.label}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumb;
