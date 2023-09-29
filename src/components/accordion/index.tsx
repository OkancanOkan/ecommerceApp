import React, { useState } from 'react';
import './accordion.css';

interface AccordionProps {
  title: string;
  children?: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="styled-accordion">
      <div
        className={`styled-accordion-header ${isOpen ? 'open' : 'close'}`}
        onClick={toggleAccordion}
      >
        <h2>{title}</h2>
        <span>
          {isOpen === true ? (
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke-linecap="square"
                stroke-miterlimit="10"
                stroke-width="48"
                d="M112 184l144 144 144-144"
              ></path>
            </svg>
          ) : (
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke-linecap="square"
                stroke-miterlimit="10"
                stroke-width="48"
                d="M112 184l144 144 144-144"
              ></path>
            </svg>
          )}
        </span>
      </div>
      {isOpen && <div className="styled-accordion-content">{children}</div>}
    </div>
  );
};

export default Accordion;
