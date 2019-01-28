import React from 'react';
import './Dashboard';

import { GenericTemplate, Tasks } from 'components';

const Dashboard = () => {
  return (
    <GenericTemplate title="Dashboard" className="Dashboard">
      <h2 className="h2">Your Dashboard</h2>
      <Tasks />
    </GenericTemplate>
  );
};

export default Dashboard;
