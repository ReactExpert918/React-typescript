import React, {useState} from 'react';
import './MenuButtons.css';

interface MenuButtonsPropsType {
  type: string;
}

const MenuButtons: React.FC<MenuButtonsPropsType> = ({type}) => {
  const [name, setName] = useState("123");
  
  return (
    <>
      <div className="menu-buttons">
        <img src={`./assets/images/${type}.png`} />
        <p>
          {
          type==="seeds" ? "Насіння" : 
          type==="sapling" ? "Засоби захисту рослин" : 
          type==="fertilizer" ? "Добрива" : 
          type==="frame" ? "кормова група" : "Агроному в поміч"}
        </p>
      </div>
    </>
  )
}

export default MenuButtons;