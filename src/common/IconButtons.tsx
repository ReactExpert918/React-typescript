import React from 'react';
import './IconButtonStyle.css';

interface IconButtonPropsType {
  type: string;
  role: string;
  number: string;
  // click: () => void;
}

const IconButtons: React.FC<IconButtonPropsType> = ({
  type, role, number=0
}) => {
  return (
    <>
      <div className={`product-${role}${type}`}>
        <img 
          src={`./assets/svgs/${type}.svg`} 
          alt={type}
        />
        {number !== "0" ? <div className="add-number">{number}</div> : null}
      </div>
    </>
  )
}

export default IconButtons;