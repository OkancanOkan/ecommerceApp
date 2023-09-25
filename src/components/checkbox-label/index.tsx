import React, { useState } from 'react';
import './checkbox-label.css';

interface CheckboxLabelProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  inStock?: string;
}

const CheckboxLabel: React.FC<CheckboxLabelProps> = ({
  label,
  checked,
  onChange,
  inStock,
}) => {
  const handleCheckboxChange = () => {
    onChange(!checked);
  };

  return (
    <label className="styled-checkboxLabel-label">
      <input
        className="styled-checkboxLabel-input"
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      {label}
      <span className="styled-checkboxLabel-span">{`(${inStock})`}</span>
    </label>
  );
};

export default CheckboxLabel;
