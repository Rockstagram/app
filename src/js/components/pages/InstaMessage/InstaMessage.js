import React, { Component } from 'react';
import { GenericTemplate, CreateTask } from 'components';

class InstaMessage extends Component {
  render() {
    return (
      <GenericTemplate title="Instagram Messenger" className="InstaMessenger">
        <CreateTask
          type="message"
          title="Instagram Messenger"
          hasSpeed="true"
          hasUserHandle="true"
          hasText="true"
          message="Writing direct messages"
          baseSpeed="120000"
          baseFactor="40"
        />
      </GenericTemplate>
    );
  }
}

export default InstaMessage;
