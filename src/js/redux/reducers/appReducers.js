import { APP_INIT } from 'redux/actions/types';

const initialState = {
  init: null
};

export default (state = initialState, action) => {
  switch (action.type) {
  case APP_INIT:
    return {
      ...state,
      init: action.payload
    };

  default:
    return state;
  }
};
