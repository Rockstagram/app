import React, { Component } from 'react';
import { GenericTemplate, CreateTask } from 'components';

class InstaFollow extends Component {
  state = {};

  render() {
    return (
      <GenericTemplate title="Instagram Follower" className="InstaFollow">
        <CreateTask />
      </GenericTemplate>
    );
  }
}

export default InstaFollow;
