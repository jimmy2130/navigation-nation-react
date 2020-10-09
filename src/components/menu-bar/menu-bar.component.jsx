import React from 'react';
import './menu-bars.styles.css';

const MenuBar = ({ handleClick, isClicked }) => {
  return(
    <div className={`menu-bars ${isClicked ? "change" : ""}`} onClick={handleClick}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  );
}

export default MenuBar;