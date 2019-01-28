import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'redux/reducers';

const initialState = {};
const middleware = [thunk];

const useDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default createStore(
  rootReducer,
  initialState,
  useDevTools // (1)
    ? compose(
      applyMiddleware(...middleware),
      useDevTools
    )
    : applyMiddleware(...middleware)
);

/* (1)
Stuff inside middlewares have to be react specific middlewares
here, we want to use the redux devtools extension if available
if not, we want to do nothing. If we would just use "false" or "null"
the app would break because the app would try false.map etc.
*/
