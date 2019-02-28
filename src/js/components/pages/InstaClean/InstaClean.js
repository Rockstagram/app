import React, { Component } from 'react';
import { GenericTemplate, CreateTask } from 'components';

class InstaClean extends Component {
  render() {
    return (
      <GenericTemplate title="Instagram Cleaner" className="InstaClean">
        <CreateTask
          type="clean"
          title="Instagram Cleaner"
          hasSpeed="true"
          hasUserHandle="true"
          message="Un-Following inactive people"
          baseSpeed="30000"
          baseFactor="88"
        />
      </GenericTemplate>
    );
  }
}

export default InstaClean;
