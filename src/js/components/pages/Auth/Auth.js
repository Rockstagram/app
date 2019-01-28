import React from 'react';
import { FullSizeTemplate, Login } from 'components';
import './Auth.css';

const Auth = () => {
  return (
    <FullSizeTemplate title="Auth" className="Auth">
      <div className="Auth__content">
        <Login />
      </div>
    </FullSizeTemplate>
  );
};

export default Auth;
