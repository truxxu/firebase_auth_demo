import React, {useContext} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {useForm} from 'react-hook-form';

import {Context as AuthContext} from '../context/AuthContext';
import {InputError, Spinner} from '../atoms';
import {LoginForm} from '../molecules';

const Login = ({navigation}) => {
  const {control, handleSubmit, errors} = useForm();
  const {
    logInUser,
    state: {isLoading, error},
  } = useContext(AuthContext);

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
  },
  loginText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center',
  },
});

export {Login};
