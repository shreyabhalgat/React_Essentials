import React from 'react'

function handelClick() {
        console.log("Hello button")
}


export const TabButton = ({ children, onSelect }) => {
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
};
