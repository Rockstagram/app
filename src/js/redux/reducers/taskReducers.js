import { POST_TASK, PUT_TASK, GET_TASKS, GET_TASK } from 'redux/actions/types';

const initialState = {
  items: [],
  item: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
  case GET_TASKS:
    return {
      ...state,
      items: action.payload
    };

  case GET_TASK:
    return {
      ...state,
      items: state.items.filter(item => item.id === action.id)
    };

  case POST_TASK:
    // Check if action dispatched is POST_TASK and act on that
    return {
      ...state,
      items: [action.payload, ...state.items],
      item: action.payload
    };

  case PUT_TASK:
    return {
      ...state,
      items: state.items.map(item => {
        if (item.id !== action.id) return item;

        return {
          ...item,
          ...action.payload
        };
      }),
      item: action.payload
    };

  default:
    return state;
  }
};
