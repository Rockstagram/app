import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';

import './SideMenu.css';

const SideMenu = ({ expired }) => {
  if (expired) return '';

  const links = {
    Home: {
      url: '/',
      icon: 'play-circle'
    },
    Dashboard: {
      url: '/dashboard',
      icon: 'tachometer-alt'
    },
    Account: {
      url: '/account',
      icon: 'user-circle'
    }
  };

  let linkList = [];
  for (const name in links) {
    if (links.hasOwnProperty(name)) {
      const { url, icon } = links[name];
      linkList.push(
        <li key={name} className="SideMenu__item">
          <NavLink
            to={`${url}`}
            className="SideMenu__link"
            activeClassName="SideMenu__link--current"
            exact={true}
          >
            <FontAwesomeIcon icon={icon} />
            &nbsp;
            {name}
          </NavLink>
        </li>
      );
    }
  }

  return <ul className="SideMenu">{linkList}</ul>;
};

const mapStateToProps = state => ({
  expired: state.user.expired
});

export default connect(
  mapStateToProps,
  null
)(SideMenu);
