import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { LINKS } from 'Routes';

class PrivateRoute extends Component {
  render() {
    const { children, location, user, ...rest } = this.props;

    if (user.loggedIn) {
      return <Route {...rest}>{children}</Route>;
    } else {
      return (
        <Redirect
          to={{
            pathname: LINKS.auth,
            state: { from: location }
          }}
        />
      );
    }
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(
  mapStateToProps,
  null
)(PrivateRoute);

// idea from https://reacttraining.com/react-router/web/example/auth-workflow
