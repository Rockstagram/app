import { Component } from 'react';
import { connect } from 'react-redux';
import { appInit } from 'redux/actions/appActions';
const ipcRenderer = window.require('electron').ipcRenderer;

class IpcRenderer extends Component {
  _addEventListeners() {
    if (this._listeners) return;
    ipcRenderer.on('app-init', (event, arg) => this.props.appInit(arg));
    this._listeners = true;
  }

  render() {
    this._addEventListeners();
    const { init } = this.props;
    if (init) this.loading();
    else if (init === false) this.end();
    return null;
  }

  loading() {
    console.log('loading…');
  }

  end() {
    console.log('initialized!');
  }

  chromePath(chromePath) {
    console.log('success chromepath', chromePath);
  }
}

const mapStateToProps = state => {
  return {
    init: state.app.init
  };
};

const mapActionsToProps = {
  appInit
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(IpcRenderer);
