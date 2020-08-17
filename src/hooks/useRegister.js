import {useState} from 'react';

import firebase from '../api/firebase';
import {navigate} from '../RootNavigation';

export default () => {
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
      resetForm();
      navigate('Home');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [registerUser, isLoading, error];
};
