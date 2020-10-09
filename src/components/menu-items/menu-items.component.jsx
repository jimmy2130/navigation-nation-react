import React from 'react';
import './menu-items.styles.css';
import section from '../../sectionInfo.js';

const MenuItems = ({ handleClick, isClicked }) => {
  console.log(section)
  return(
    <nav>
      <ul>
        {section.map((item, index) => (
          <li
            key={item.id}
            style={item.color}
            className={`${isClicked ? `slide-in-${index + 1}` : `slide-out-${index + 1}`}`}
            onClick={handleClick}
          >
            <a href={`#${item.id}`}>{item.id}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MenuItems;