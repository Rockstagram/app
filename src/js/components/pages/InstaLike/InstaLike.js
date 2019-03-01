import React, { Component } from 'react';
import { GenericTemplate, CreateTask } from 'components';

class InstaLike extends Component {
  render() {
    return (
      <GenericTemplate title="Instagram Liker" className="InstaLike">
        <CreateTask
          type="like"
          title="Instagram Liker"
          hasSpeed="true"
          hasUserHandle="true"
          message="Like great posts"
          baseSpeed="21000"
          baseFactor="88"
        />
      </GenericTemplate>
    );
  }
}

export default InstaLike;
