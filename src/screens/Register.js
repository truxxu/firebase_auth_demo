import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {useForm} from 'react-hook-form';

import firebase from '../../database/firebase';
import {RegisterForm} from '../molecules';
import {InputError, Spinner} from '../atoms';

const Register = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const {control, handleSubmit, errors, clearErrors} = useForm();

  const resetForm = () => {
    setError('');
    clearErrors();
  };

  const registerUser = async ({displayName, email, password}) => {
    setIsLoading(true);
    try {
      const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      response.user.updateProfile({displayName});
      console.log('User registered successfully!');
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
      <RegisterForm control={control} errors={errors} />
      <Button title="Create new account" onPress={handleSubmit(registerUser)} />
      <InputError text={error} error={error} />
      <Text
        style={styles.loginText}
        onPress={() => navigation.navigate('Login')}>
        Already Registered? Click here to login
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    padding: 35,
    backgroundColor: '#fff',
  },
  loginText: {
    color: 'blue',
    marginTop: 25,
    textAlign: 'center',
  },
});

export {Register};
