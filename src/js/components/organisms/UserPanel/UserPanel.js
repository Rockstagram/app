import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ContentPanel, LogoutButton } from 'components';
import { Helper } from 'controllers';
import './UserPanel.css';

class UserPanel extends Component {
  state = {
    type: 'free'
  };

  render() {
    return (
      <ContentPanel className="UserPanel">
        <h3 className="h3">Your User Panel</h3>
        <div className="UserPanel__container">
          <div>
            <label className="label" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              disabled
              value={this.props.user.item.username}
            />
          </div>
          <div>
            <label className="label" htmlFor="type">
              Account Type
            </label>
            <input id="type" type="text" disabled value={this.state.type} />
          </div>

          <LogoutButton />
          {this.state.type !== 'premium' ? (
            <button type="button" className="btn" onClick={Helper.upgrade}>
              Upgrade
            </button>
          ) : (
            ''
          )}
        </div>
      </ContentPanel>
    );
  }
}

const mapStateToProps = state => ({ user: state.user });

export default connect(
  mapStateToProps,
  null
)(UserPanel);
