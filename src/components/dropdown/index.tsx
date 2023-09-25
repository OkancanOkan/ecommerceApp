import React, { useState } from 'react';
import './dropdown.css';

interface DropdownProps {
  options: string[];
  onSelect: (selectedOption: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    toggleDropdown();
  };

  return (
    <div className="styled-dropdown">
      <div className="styled-dropdown-header" onClick={toggleDropdown}>
        <span className="styled-dropdown-header-short">
          {`Short By : ${selectedOption ? selectedOption : ''}`}
        </span>
        <span className="styled-dropdown-header-arrow">&#9660;</span>
      </div>
      {isDropdownOpen && (
        <ul className="styled-dropdown-options">
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
