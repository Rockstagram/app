import { LOGIN_USER, GET_USER, LOGOUT_USER } from 'redux/actions/types';

// dispatch comes from redux and is used to handle async calls in state
export const login = ({ username, password }) => dispatch => {
  console.log('login in', username, password);
  fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.json())
    .then(user =>
      dispatch({
        type: LOGIN_USER,
        payload: user
      })
    );
};

// dispatch comes from redux and is used to handle async calls in state
export const get = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.json())
    .then(user =>
      dispatch({
        type: GET_USER,
        payload: user
      })
    );
};

// dispatch comes from redux and is used to handle async calls in state
export const logout = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.json())
    .then(user =>
      dispatch({
        type: LOGOUT_USER,
        payload: user
      })
    );
};
