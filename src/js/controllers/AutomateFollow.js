import { Component } from 'react';
import { START, STOP, PLAYING, ERROR } from 'workerStates';
import { putTask } from 'redux/actions/taskActions';
import { connect } from 'react-redux';
import workers from 'insta-workers';
const { fork, path } = window
  .require('electron')
  .remote.require('./electron.js');

class AutomateFollow extends Component {
  children = [];

  render() {
    const { task } = this.props;
    if (task.state === START) this.automate(task);
    if (task.state === STOP) this.endTask(task);
    return null;
  }

  automate(task) {
    const workerFile = path.normalize(
      `${path.parse(window.require.resolve('insta-workers')).dir}/${
        workers.folder
      }/${workers.files.follow}`
    );
    const child = fork(workerFile); // here is a fork example: https://stackoverflow.com/questions/13371113/how-can-i-execute-a-node-js-module-as-a-child-process-of-a-node-js-program --- not related but see: https://www.youtube.com/watch?v=9o8B3L0-d9c
    child.__id = task.id;
    this.children.push(child);
    child.send(task); // Send child process some task
    child.on('message', task => this.childMessage(task));
  }

  // Process & Child Handling below
  //////////////////////////////////////////////////

  childMessage(task) {
    // if(task.error) return this.error(task);
    if (task.end) {
      task.state = STOP;
      return this.props.putTask(task);
    }

    task.state = PLAYING;
    this.props.putTask(task);
  }

  endTask(task) {
    task.end = 'kill';
    const child = this.children.filter(child => child.__id === task.id)[0];
    if (child) {
      child.send(task);
      this.children.splice(this.children.indexOf(child), 1);
      setTimeout(() => child.kill(), 5000); // needs a timeout otherwise the message will not be send
    }
  }
}

const mapStateToProps = state => {
  return {
    task: state.tasks.item
  };
};

const mapActionsToProps = {
  putTask
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(AutomateFollow);
