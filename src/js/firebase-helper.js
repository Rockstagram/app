// see https://medium.com/quick-code/how-to-integrate-react-redux-and-firebase-in-3-simple-steps-c44804a6af38
import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

firebase.initializeApp({
  apiKey: 'AIzaSyC1mo2oVX9WNookrfW-xsdNpt8kH2X-aZw',
  authDomain: 'rockstagram-3ddd4.firebaseapp.com',
  databaseURL: 'https://rockstagram-3ddd4.firebaseio.com',
  projectId: 'rockstagram-3ddd4',
  storageBucket: 'rockstagram-3ddd4.appspot.com',
  messagingSenderId: '769218218759'
});

export const dbRef = firebase.database().ref();
export const usersRef = dbRef.child('users');
export const authRef = firebase.auth();
// export const todosRef = databaseRef.child('todos');
