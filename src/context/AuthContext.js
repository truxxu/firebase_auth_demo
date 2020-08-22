import createDataContext from './createDataContext';
import firebase from '../api/firebase';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'get_user':
      return {...state, user: action.payload, error: ''};
    case 'add_error':
      return {...state, error: action.payload};
    case 'toggle_load':
      return {...state, isLoading: !state.isLoading};
    case 'sign_out':
      return {...state, user: null, error: ''};
    default:
      return state;
  }
};

const getUser = (dispatch) => async () => {
  dispatch({type: 'toggle_load'});
  try {
    await firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        dispatch({type: 'get_user', payload: user});
        console.log('user is already signed in');
      }
    });
  } finally {
    dispatch({type: 'toggle_load'});
  }
};

const logInUser = (dispatch) => async ({email, password}) => {
  dispatch({type: 'toggle_load'});
  try {
    const response = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    dispatch({type: 'get_user', payload: response.user});
    console.log('User logged-in successfully!');
  } catch (err) {
    dispatch({type: 'add_error', payload: err.message});
  } finally {
    dispatch({type: 'toggle_load'});
  }
};

const registerUser = (dispatch) => async ({displayName, email, password}) => {
  dispatch({type: 'toggle_load'});
  try {
    const response = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    await response.user.updateProfile({displayName});
    dispatch({type: 'get_user', payload: response.user});
    console.log('User registered successfully!');
  } catch (err) {
    dispatch({type: 'add_error', payload: err.message});
  } finally {
    dispatch({type: 'toggle_load'});
  }
};

const logOutUser = (dispatch) => async () => {
  dispatch({type: 'toggle_load'});
  try {
    await firebase.auth().signOut();
    dispatch({type: 'sign_out'});
    console.log('User logged-out successfully!');
  } catch (err) {
    dispatch({type: 'add_error', payload: err.message});
  } finally {
    dispatch({type: 'toggle_load'});
  }
};

export const {Provider, Context} = createDataContext(
  authReducer,
  {getUser, logInUser, logOutUser, registerUser},
  {user: null, isLoading: false, error: ''},
);
