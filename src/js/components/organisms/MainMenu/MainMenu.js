import React from 'react';

import { SideMenu } from 'components';

import styles from './MainMenu.css';

const MainMenu = () => {
  return (
    <nav className={styles['MainMenu']} aria-labelledby="menu">
      <h2 id="menu" className="visually-hidden">
        Main Menu
      </h2>
      <SideMenu />
    </nav>
  );
};

export default MainMenu;
