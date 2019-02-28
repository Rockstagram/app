import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { LINKS } from 'Routes';

import './SideMenu.css';

const SideMenu = ({ expired, user }) => {
  if (expired) return '';

  const links = {
    Home: {
      url: LINKS.home,
      icon: 'play-circle'
    },
    Dashboard: {
      url: LINKS.dashboard,
      icon: 'tachometer-alt'
    },
    Account: {
      url: LINKS.account,
      icon: 'user-circle'
    },
    Help: {
      direct: true,
      url: `mailto:mail@rockstagram.app?subject=Please help&body=%0A
      %0A------
      %0AUsername: ${user.email}
      %0AExpired: ${expired}`,
      icon: 'life-ring'
    }
  };

  let linkList = [];
  for (const name in links) {
    if (links.hasOwnProperty(name)) {
      const { url, icon, direct } = links[name];
      linkList.push(
        <li key={name} className="SideMenu__item">
          {direct ? (
            <a
              href={`${url}`}
              className="SideMenu__link"
              activeClassName="SideMenu__link--current"
            >
              <FontAwesomeIcon icon={icon} />
              &nbsp;
              {name}
            </a>
          ) : (
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
          )}
        </li>
      );
    }
  }

  return <ul className="SideMenu">{linkList}</ul>;
};

const mapStateToProps = state => ({
  expired: state.user.expired,
  user: state.user.item
});

export default connect(
  mapStateToProps,
  null
)(SideMenu);
