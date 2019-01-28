import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { LINKS } from 'Routes';
import { logout } from 'redux/actions/userActions';

class LogoutButton extends Component {
  logOut = () => {
    this.props.logout();
  };

  render() {
    if (!this.props.user.loggedIn) return <Redirect to={LINKS.home} />;

    return (
      <button type="button" className="btn" onClick={this.logOut}>
        Logout
      </button>
    );
  }
}

const mapStateToProps = state => ({ user: state.user });
const mapActionsToProps = { logout };

export default connect(
  mapStateToProps,
  mapActionsToProps
)(LogoutButton);
