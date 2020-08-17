import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {useForm} from 'react-hook-form';

import firebase from '../../database/firebase';
import {LoginForm} from '../molecules';
import {InputError, Spinner} from '../atoms';

const Login = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const {control, handleSubmit, errors, clearErrors} = useForm();

  const resetForm = () => {
    setError('');
    clearErrors();
  };

  const logInUser = async ({email, password}) => {
    setIsLoading(true);
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log('User logged-in successfully!');
      resetForm();
      navigation.navigate('Home');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <View style={styles.container}>
      <LoginForm control={control} errors={errors} />
      <Button title="Sign in" onPress={handleSubmit(logInUser)} />
      <InputError text={error} error={error} />
      <Text
        style={styles.loginText}
        onPress={() => navigation.navigate('Register')}>
        Don't have account? Click here to signup
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 35,
    backgroundColor: '#fff',
  },
  loginText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center',
  },
});

export {Login};
