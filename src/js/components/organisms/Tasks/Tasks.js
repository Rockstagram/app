import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { LINKS } from 'Routes';
import { connect } from 'react-redux';
import { putTask } from 'redux/actions/taskActions';
import { PLAYING, STOP } from 'workerStates';
import { ContentPanel, Table } from 'components';
import './Tasks.css';

class Tasks extends Component {
  stopTask(id) {
    const task = this.props.taskItems.filter(task => task.id === id)[0];
    task.state = STOP;
    this.props.putTask(task);
  }

  handleNoTasks() {
    return [
      <td className="Tasks__td" colSpan="7">
        No tasks yet...
        <NavLink to={LINKS.home}> Create your first task now</NavLink>
      </td>
    ];
  }

  handleTaskActions(task) {
    const stopButton = (
      <button
        type="button"
        className="btn"
        onClick={() => this.stopTask(task.id)}
      >
        Stop
      </button>
    );

    return (
      <td className="Tasks__td">
        {task.state === PLAYING ? stopButton : ''}
        {/* <NavLink to={`${LINKS.tasks}/${task.id}`}>Inspect</NavLink> */}
      </td>
    );
  }

  handleTasks() {
    if (this.props.taskItems.length <= 0) return this.handleNoTasks();

    return this.props.taskItems.map(task => [
      <td className="Tasks__td">{task.date}</td>,
      <td className="Tasks__td" data-sort={task.id}>
        <input
          className="Tasks__input"
          title={`ID: ${task.id}`}
          value={task.id}
          disabled
        />
      </td>,
      <td className="Tasks__td">{task.name}</td>,
      <td className="Tasks__td">{task.state}</td>,
      <td className="Tasks__td">{task.value}</td>,
      this.handleTaskActions(task)
    ]);
  }

  render() {
    return (
      <ContentPanel className="Tasks">
        <h3 className="h3">Your Tasks</h3>
        <Table
          tHeads={[
            'Date:',
            'Task-ID:',
            'Name:',
            'Status:',
            'Value:',
            'Action:'
          ]}
          tRows={this.handleTasks()}
        />
      </ContentPanel>
    );
  }
}

const mapStateToProps = state => {
  return {
    taskItems: state.tasks.items
  };
};

const mapActionsToProps = {
  putTask
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Tasks);
