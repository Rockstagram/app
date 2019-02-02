import React from 'react';
import { FullSizeTemplate, Login } from 'components';
import { fetchUser } from 'redux/actions/userActions';
import { connect } from 'react-redux';
import './Auth.css';

const Auth = ({ fetchUser }) => {
  fetchUser();
  return (
    <FullSizeTemplate title="Auth" className="Auth">
      <div className="Auth__content">
        <Login />
      </div>
    </FullSizeTemplate>
  );
};

const mapActionsToProps = { fetchUser };

export default connect(
  null,
  mapActionsToProps
)(Auth);
