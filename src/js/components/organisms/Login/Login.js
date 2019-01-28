import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { LINKS } from 'Routes';
import { login } from 'redux/actions/userActions';
import { ContentPanel } from 'components';
import './Login.css';

class Login extends Component {
  state = {
    username: '',
    password: ''
  };

  handleChange = event => {
    let { id, value } = event.target;
    this.setState({ [id]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { password, username } = this.state;
    this.props.login({
      password,
      username
    });
  };

  render() {
    if (this.props.user.loggedIn) return <Redirect to={LINKS.home} />;

    return (
      <ContentPanel className="Login">
        <h2 className="h2">Login</h2>
        <form className="Login__container">
          <div>
            <label className="label" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              className="input"
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="input"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn--cta"
            onClick={this.handleSubmit}
          >
            Login
          </button>
        </form>
      </ContentPanel>
    );
  }
}

const mapStateToProps = state => ({ user: state.user });
const mapActionsToProps = { login };

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Login);
