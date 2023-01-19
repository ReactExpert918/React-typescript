import React from 'react';
import IconButtons from '../../common/IconButtons';
import MenuButtons from '../../common/MenuButtons';
import './style.css';


const Header = () => {
  return (
    <>
      <div className="header">
        <div className="top-nav">
          <div className="top-menu">
            <div className='menu-container'>
              <div><a>Про нас</a></div>
              <div><a>Каталог продукції </a></div>
              <div><a>Оплата і доставка </a></div>
              <div><a>Партнери</a></div>
              <div><a>Новини</a></div>
              <div><a>Контакти</a></div>
            </div>
          </div> 
          <div className="top-login">
            <img src="./assets/svgs/login.svg" />
            <a>Вхід |</a>
            <a> &nbsp;Реестрація</a>
          </div>   
        </div>
        <div className="search-cart">
          <div className="logo">
            <img src="./assets/images/logo.png" />
          </div>
          <div className="search">
            <input placeholder="Пошук" />
            <img src='./assets/svgs/search.svg' />
          </div>
          <div className="phone">
            <IconButtons type="phone" role="" number="0" />
            <div className="phone-numbers">
              <p className="phone-number">+38 (067) 115 00 58</p>
              <p className="phone-detail">Замовити зворотній зв’язок</p>
            </div>
          </div>
          <div className="icons">
            <IconButtons type="heart" role="" number="0" />
            <IconButtons type="weight" role="add" number="1" />
            <IconButtons type="cart" role="add" number="1" />
          </div>
        </div>
        <div className="top-buttons">
          <MenuButtons type="seeds" />
          <MenuButtons type="sapling" />
          <MenuButtons type="fertilizer" />
          <MenuButtons type="frame" />
          <MenuButtons type="farmer" />
        </div>
      </div>
    </>
  )
}

export default Header;