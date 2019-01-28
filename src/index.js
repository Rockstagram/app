import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { AutomateFollow, WindowManager } from 'controllers';
import Routes from 'Routes';
import store from 'redux/store';

import 'font-awesome';

const app = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <React.Fragment>
      <HashRouter>
        <Routes />
      </HashRouter>

      <AutomateFollow />
      <WindowManager />
    </React.Fragment>
  </Provider>,
  app
);

export default app;
