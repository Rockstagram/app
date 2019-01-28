import { LOGIN_USER, LOGOUT_USER, GET_USER } from 'redux/actions/types';

const initialState = {
  item: {},
  error: false,
  loggedIn: false
};

export default (state = initialState, action) => {
  switch (action.type) {
  case LOGIN_USER:
    return {
      ...state,
      item: action.payload,
      loggedIn: true
    };

  case LOGOUT_USER:
    return {
      ...state,
      item: {},
      loggedIn: false
    };

  case GET_USER:
    // Check if action dispatched is POST_TASK and act on that
    return {
      ...state,
      item: action.payload,
      loggedIn: true
    };

  default:
    return state;
  }
};
