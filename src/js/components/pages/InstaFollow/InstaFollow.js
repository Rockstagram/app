import React, { Component } from 'react';
import { GenericTemplate, CreateTask } from 'components';

class InstaFollow extends Component {
  state = {};

  render() {
    return (
      <GenericTemplate title="Instagram Follower" className="InstaFollow">
        <CreateTask
          type="follow"
          title="Instagram Follower"
          hasKeyword="true"
          hasSpeed="true"
          message="Following people interested in "
          baseSpeed="45000"
          baseFactor="51"
        />
      </GenericTemplate>
    );
  }
}

export default InstaFollow;
