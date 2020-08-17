import {useState} from 'react';

import firebase from '../api/firebase';
import {navigate} from '../RootNavigation';

export const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const registerUser = async ({displayName, email, password}) => {
    setIsLoading(true);
    try {
      const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      response.user.updateProfile({displayName});
      console.log('User registered successfully!');
      setError('');
      navigate('Home');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [registerUser, isLoading, error];
};

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const logInUser = async ({email, password}) => {
    setIsLoading(true);
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log('User logged-in successfully!');
      setError('');
      navigate('Home');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [logInUser, isLoading, error];
};

export const useLogOut = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const signOutUser = async () => {
    setIsLoading(true);
    try {
      await firebase.auth().signOut();
      navigate('Login');
      console.log('User logged-out successfully!');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [signOutUser, isLoading, error];
};
