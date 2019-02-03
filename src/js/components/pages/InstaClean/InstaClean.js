import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { LINKS } from 'Routes';
import { GenericTemplate, CreateTask } from 'components';
import { planSizes } from 'constantz';
const { SMALL } = planSizes;

class InstaClean extends Component {
  render() {
    if (this.props.user.plan === SMALL) return <Redirect to={LINKS.getPro} />;

    return (
      <GenericTemplate title="Instagram Cleaner" className="InstaClean">
        <CreateTask
          type="clean"
          title="Instagram Cleaner"
          hasSpeed="true"
          hasUserHandle="true"
          message="Un-Following inactive people"
          baseSpeed="31000"
        />
      </GenericTemplate>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.item
});

// Use connect to put them together
export default connect(
  mapStateToProps,
  null
)(InstaClean);
