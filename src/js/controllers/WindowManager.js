import { Component } from 'react';
import { connect } from 'react-redux';
import { putTask } from 'redux/actions/taskActions';
import { STOP, PLAYING } from 'workerStates';
const { remote } = window.require('electron');
const { dialog } = remote;
const mainWindow = remote.getCurrentWindow();

class WindowManager extends Component {
  render() {
    window.onbeforeunload = this.onbeforeunload;
    return null;
  }

  getPlayingTasks() {
    const playingTasks = this.props.tasks.filter(
      task => task.state === PLAYING
    );
    return playingTasks.length > 0 ? playingTasks : false;
  }

  // Prevent Closing when task is running
  onbeforeunload = event => {
    const tasks = this.getPlayingTasks();
    if (!tasks) return;
    const { putTask } = this.props;

    const friendlyTasks = tasks.map(
      task => `${task.name} (${task.id.slice(0, 8)})`
    );
    event.returnValue = false;
    const dialogOptions = {
      type: 'info',
      buttons: ['YES', 'No'],
      message: `
Do you really want to close the application?
There are running tasks: 
- ${friendlyTasks.join('\n- ')}
Closing will stop the tasks.
    `
    };
    dialog.showMessageBox(dialogOptions, i => {
      if (i === 0) {
        tasks.forEach(task => {
          task.state = STOP;
          putTask(task);
        });
        setTimeout(() => {
          mainWindow.destroy();
        }, 1000);
      }
    });
  };
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks.items
  };
};

const mapActionsToProps = {
  putTask
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(WindowManager);
