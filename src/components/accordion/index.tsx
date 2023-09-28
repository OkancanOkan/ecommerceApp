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
    <div className={isOpen ? 'styled-accordion-open' : 'styled-accordion'}>
      <div
        className={
          isOpen ? 'styled-accordion-header-open' : 'styled-accordion-header'
        }
        onClick={toggleAccordion}
      >
        <h2>{title}</h2>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className="styled-accordion-content">{children}</div>}
    </div>
  );
};

export default Accordion;
