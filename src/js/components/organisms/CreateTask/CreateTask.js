import React, { Component } from 'react';
import './CreateTask.css';
import {
  ContentPanel,
  ControlledInputField,
  InputFieldsSpeed,
  InputFieldsCredentials
} from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { postTask } from 'redux/actions/taskActions';
import { Redirect } from 'react-router-dom';
import { LINKS } from 'Routes';
import { Helper } from 'controllers';
import { START } from 'workerStates';

class CreateTask extends Component {
  state = {
    username: '',
    password: '',
    keyword: '',
    speed: 1,
    redirect: false
  };

  handleChange = event => {
    let { id, value } = event.target;
    this.setState({ [id]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { password, username, keyword, speed } = this.state;
    this.props.postTask({
      config: {
        password,
        username,
        keyword,
        waitForClick: 10000 / speed, // between each follow button click. Recommend 10 000
        waitBetween: 20000 / speed // between each post set. Recommend 20 000. the slower the better.}) {
      },
      id: Helper.generateUUID(),
      date: Helper.getDate(),
      state: START,
      name: 'Instagram Follower',
      message: `Following people interested in “${keyword}”`,
      value: 0
    });

    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) return <Redirect to={LINKS.dashboard} />;

    const { username, password, keyword, speed } = this.state;

    return (
      <div className="CreateTask">
        <h2 className="h2">Instagram Follower [Create Task]</h2>
        <form onSubmit={this.handleSubmit}>
          <ContentPanel className="CreateTask__panel">
            <h3 className="h3">Instagram Credentials</h3>
            <div className="CreateTask__panel-c">
              <InputFieldsCredentials
                username={username}
                password={password}
                onChange={this.handleChange}
              />
            </div>
          </ContentPanel>
          <ContentPanel className="CreateTask__panel">
            <h3 className="h3">Task Settings</h3>
            <div className="CreateTask__panel-c">
              <div>
                <ControlledInputField
                  label="Niche Keyword:"
                  id="keyword"
                  placeholder="foodporn"
                  name="keyword"
                  autoComplete="keyword"
                  value={keyword || ''}
                  onChange={this.handleChange}
                  required="true"
                  subText="
                  Enter the most relevant keyword to you niche.
                  This single keyword will be used to find followers
                  interested in your content.
                  Never&nbsp;enter more than one keyword per task."
                />
              </div>
              <InputFieldsSpeed speed={speed} onChange={this.handleChange} />
            </div>
          </ContentPanel>
          <button type="submit" className="btn btn--cta CreateTask__cta">
            Create&nbsp;Task&nbsp;
            <FontAwesomeIcon icon="play-circle" />
          </button>
        </form>
      </div>
    );
  }
}

// Maps state from store to react props
const mapStateToProps = state => {
  return {
    // posts here is what we set in our root reducer as reducer name
    // it will use that and put it in the react props
    // You can now say this.props.task
    tasks: state.tasks
  };
};

// Maps actions to props
const mapActionsToProps = {
  // You can now say this.props.postTask
  postTask
};

// Use connect to put them together
export default connect(
  mapStateToProps,
  mapActionsToProps
)(CreateTask);
