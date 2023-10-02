import React from 'react';
import './progressBar.css';

interface ProgressBarProps {
  label: string;
  percent: number;
  maxWidth?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  label,
  percent,
  maxWidth = false,
}) => {
  return (
    <div className={`styled-progress ${maxWidth ? 'maxWidth' : ''}`}>
      <div className="styled-progress-label">
        <span className="styled-progress-label-text-percent">{label}</span>
        <span className="styled-progress-label-text-percent">{percent}%</span>
      </div>
      <div className="styled-progress-bar ">
        <div
          className="styled-progres-bar-line"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
    // <div
    //   className={`progress-bar ${
    //     labelPosition === 'left' ? 'with-label-left' : ''
    //   }`}
    // >
    //   {labelPosition === 'top' && <div className="progress-label">{label}</div>}
    //   <div className="progress-container">
    //     {labelPosition === 'left' && (
    //       <div className="progress-label left-label">{label}</div>
    //     )}
    //     <div
    //       className={`progress ${
    //         labelPosition === 'left' ? 'with-label-left' : ''
    //       }`}
    //     >
    //       <div className="progress-fill" style={{ width: `${percent}%` }}>
    //         <span className="progress-percent">{percent}%</span>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ProgressBar;
