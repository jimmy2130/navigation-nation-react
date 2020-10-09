import { useState } from 'react';
export const Toggle = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return {
    isClicked: isClicked,
    handleClick: handleClick
  };
};