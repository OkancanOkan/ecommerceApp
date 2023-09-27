import React from 'react';
import './select-button.css';

interface SelectButtonProps {
  name: string; // İşaretlenen checkbox'un adı
  handleClose: () => void; // Kapatma işlevi
}

const SelectButton: React.FC<SelectButtonProps> = ({ name, handleClose }) => {
  return (
    <div className="styled-selectButton">
      <button className="styled-selectButton-button" onClick={handleClose}>
        <span className="styled-selectButton-span">{name}</span>
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
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
            d="M368 368L144 144m224 0L144 368"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default SelectButton;
