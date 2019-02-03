import React, { Component } from 'react';
import './CreateTask.css';
import {
  ContentPanel,
  InputFieldsKeyword,
  InputFieldsUserHandle,
  InputFieldsSpeed,
  InputFieldsCredentials
} from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { postTask } from 'redux/actions/taskActions';
import { Redirect } from 'react-router-dom';
import { LINKS } from 'Routes';
import { Helper } from 'controllers';
import { workerStates, parallelTasks, planSizes } from 'constantz';
const { START, PLAYING } = workerStates;
const { SMALL, MEDIUM, LARGE } = planSizes;

class CreateTask extends Component {
  state = {
    username: '',
    password: '',
    keyword: '',
    userHandle: '',
    speed: 1,
    redirect: false
  };

  handleChange = event => {
    let { id, value } = event.target;
    this.setState({ [id]: value });
    console.log('state', id, value, this.state);
  };

  checkLimits = () => {
    const { userPlan, taskItems, type } = this.props;
    const runningTasks = taskItems.filter(
      task => task.state === PLAYING && task.type === type
    );
    const mapPlansToTasks = {
      [SMALL]: parallelTasks[SMALL],
      [MEDIUM]: parallelTasks[MEDIUM],
      [LARGE]: parallelTasks[LARGE]
    };
    if (runningTasks.length >= mapPlansToTasks[userPlan]) {
      console.log(runningTasks.length, mapPlansToTasks[userPlan], userPlan);
      const choice = window.confirm(`
You’re not allowed to run more than
${mapPlansToTasks[userPlan]} Tasks of the same type in parallel.
${userPlan !== LARGE ? 'Upgrade your plan to remove the limits.' : ''}
      `);
      console.log(choice);
      if (choice) this.setState({ buyPro: true });
      return false;
    }
    return true;
  };

  handleSubmit = e => {
    e.preventDefault();

    if (!this.checkLimits()) return false;

    const { password, username, keyword, userHandle, speed } = this.state;
    const { baseSpeed, message, title, type } = this.props;
    this.props.postTask({
      config: {
        password,
        username,
        keyword,
        userHandle,
        wait: baseSpeed / (speed * 1) // speed
      },
      id: Helper.generateUUID(),
      date: Helper.getDate(),
      state: START,
      name: title,
      type: type,
      message: `${message} ${keyword}`,
      value: 0
    });

    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) return <Redirect to={LINKS.dashboard} />;
    if (this.state.buyPro) return <Redirect to={LINKS.getPro} />;

    const { username, password, keyword, userHandle, speed } = this.state;
    const {
      title,
      hasSpeed,
      hasKeyword,
      hasUserHandle,
      baseSpeed,
      baseFactor
    } = this.props;

    return (
      <div className="CreateTask">
        <h2 className="h2">{title} [Create Task]</h2>
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
              {hasKeyword ? (
                <InputFieldsKeyword
                  keyword={keyword}
                  onChange={this.handleChange}
                />
              ) : (
                ''
              )}
              {hasUserHandle ? (
                <InputFieldsUserHandle
                  userHandle={userHandle}
                  onChange={this.handleChange}
                />
              ) : (
                ''
              )}
              {hasSpeed ? (
                <InputFieldsSpeed
                  speed={speed}
                  onChange={this.handleChange}
                  baseSpeed={baseSpeed}
                  baseFactor={baseFactor}
                />
              ) : (
                ''
              )}
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

const mapStateToProps = state => ({
  taskItems: state.tasks.items,
  userPlan: state.user.item.plan
});
const mapActionsToProps = { postTask };

export default connect(
  mapStateToProps,
  mapActionsToProps
)(CreateTask);
