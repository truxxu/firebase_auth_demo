import createDataContext from './createDataContext';
import firebase from '../api/firebase';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'get_user':
      return {...state, user: action.payload};
    case 'add_error':
      return {...state, error: action.payload};
    case 'toggle_load':
      return {...state, isLoading: !state.isLoading};
    default:
      return state;
  }
};

const getUser = (dispatch) => async () => {
  try {
    const response = await firebase.auth().currentUser;
    dispatch({type: 'get_user', payload: response});
  } catch (err) {
    dispatch({type: 'add_error', payload: err.message});
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

export const {Provider, Context} = createDataContext(
  authReducer,
  {getUser, logInUser},
  {user: null, isLoading: false, error: ''},
);
