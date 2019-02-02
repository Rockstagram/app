import { authRef, usersRef } from 'firebase-helper';
import { LOGIN_USER, GET_USER, LOGOUT_USER } from 'redux/actions/types';

export const fetchUser = () => dispatch =>
  authRef.onAuthStateChanged(user => {
    if (user) {
      console.log('USER SIGNED IN');
      return usersRef.child(user.uid).on('value', dbUser =>
        dispatch({
          type: LOGIN_USER,
          payload: dbUser.val()
        })
      );
    } else {
      console.log('NO USER');
      return dispatch({
        type: LOGOUT_USER,
        payload: false
      });
    }
  });

// dispatch comes from redux and is used to handle async calls in state
export const login = ({ username, password }) => dispatch => {
  console.log('login in', username, password);
  authRef
    .signInWithEmailAndPassword(username, password)
    .then(user => console.log(user)) // will be handled by fetchUser()
    .catch(error => alert(error));
};

// dispatch comes from redux and is used to handle async calls in state
export const get = id => dispatch => {
  usersRef.child(id).on('value', dbUser =>
    dispatch({
      type: GET_USER,
      payload: dbUser.val()
    })
  );
};

// dispatch comes from redux and is used to handle async calls in state
export const logout = () => dispatch => {
  authRef
    .signOut()
    .then(user => console.log(user)) // will be handled by fetchUser()
    .catch(err => alert(err));
};
