import React from 'react';

import './Header.css';

const Header = ({ title }) => {
  return (
    <header className="Header" role="banner">
      <section className="Header__container">
        <h1>{title}</h1>
        <div className="Header__rightcontainer">
          <div className="searchbar__container">{/* <Searchbar /> */}</div>
          <div className="cartbutton__container">{/* <CartButton /> */}</div>
        </div>
      </section>
    </header>
  );
};

export default Header;
