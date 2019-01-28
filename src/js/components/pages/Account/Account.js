import React from 'react';
import { GenericTemplate, UserPanel } from 'components';

const Account = () => {
  return (
    <GenericTemplate title="Account" className="Account">
      <h2 className="h2">Your Account</h2>
      <UserPanel />
    </GenericTemplate>
  );
};

export default Account;
