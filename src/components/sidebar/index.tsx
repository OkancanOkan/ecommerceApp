import React, { useEffect, useState } from 'react';
import './sidebar.css';
import Icon from '../icon';
import iconClose from '../../assets/icons/close.svg';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

useEffect(() => {
  setOpen(true)
}, [])


  const handleClose = () => {setOpen(false)};
  return (
    <div className="styled-sidebar">
      {open && (
        <div className="styled-sidebar-inner">
          <div className="styled-sidebar-close">
            <Icon icon={iconClose} size={25} onClick={handleClose} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
