import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {useForm} from 'react-hook-form';

import {useRegister} from '../hooks/useAuth';
import {InputError, Spinner} from '../atoms';
import {RegisterForm} from '../molecules';

const Register = ({navigation}) => {
  const {control, handleSubmit, errors} = useForm();
  const [registerUser, isLoading, error] = useRegister();

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
