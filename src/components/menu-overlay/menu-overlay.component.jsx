import React from 'react';
import './menu-overlay.styles.css';
import MenuItems from '../menu-items/menu-items.component';

const MenuOverlay = (props) => {
  const { isClicked } = props;
  return(
    <div className={`overlay ${isClicked ? "overlay-slide-right" : "overlay-slide-left"}`}>
      <MenuItems {...props}/>
    </div>
  );
}

export default MenuOverlay;