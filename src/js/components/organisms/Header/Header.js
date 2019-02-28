import React from 'react';
import { FreeTimer } from 'components';
import { connect } from 'react-redux';
import './Header.css';

const Header = ({ title, trial }) => {
  return (
    <header className="Header" role="banner">
      <section className="Header__container">
        <div className="Header__left" />
        <div className="Header__center">
          <h1>{title}</h1>
        </div>
        <div className="Header__right">
          <div className="searchbar__container">{/* <Searchbar /> */}</div>
          <div className="cartbutton__container">
            {trial ? <FreeTimer /> : ''}
          </div>
        </div>
      </section>
    </header>
  );
};

const mapStateToProps = state => ({
  trial: state.user.item.trial
});

export default connect(
  mapStateToProps,
  null
)(Header);
