import React, { useState } from 'react';
import Navigation from './Navigation/Navigation';
import Logo from './Logo/Logo';
import { menuItems } from 'utils/menuItems';

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

  return (
    <header className="app__header">
      <div className="header__content">
        <button
          onClick={() => setIsMenuVisible(!isMenuVisible)}
          className="menu__toggler"
        >
          <i className="icon-th-menu-outline"></i>
        </button>
        <Logo />
        <Navigation
          menuItems={menuItems}
          showMenu={isMenuVisible}
          onClick={() => setIsMenuVisible(!isMenuVisible)}
        />
      </div>
    </header>
  );
};

export default Header;
