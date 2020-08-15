import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

import firebase from '../../database/firebase';

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
    return (
      <View style={styles.preloader}>
        <ActivityIndicator size="large" color="#9E9E9E" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        render={({onChange, onBlur, value}) => (
          <TextInput
            style={styles.inputStyle}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder="Name"
          />
        )}
        name="displayName"
        rules={{required: true}}
        defaultValue=""
      />
      {errors.displayName && (
        <Text style={styles.errorText}>Name is required.</Text>
      )}
      <Controller
        control={control}
        render={({onChange, onBlur, value}) => (
          <TextInput
            style={styles.inputStyle}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder="Email"
          />
        )}
        name="email"
        rules={{required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/}}
        defaultValue=""
      />
      {errors.email && (
        <Text style={styles.errorText}>Plase introduce a valid email</Text>
      )}
      <Controller
        control={control}
        render={({onChange, onBlur, value}) => (
          <TextInput
            style={styles.inputStyle}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder="Password"
            secureTextEntry={true}
          />
        )}
        name="password"
        rules={{required: true, minLength: 3, maxLength: 10}}
        defaultValue=""
      />
      {errors.password && (
        <Text style={styles.errorText}>Password is required.</Text>
      )}

      <Button title="Create new account" onPress={handleSubmit(registerUser)} />
      <Text style={styles.errorText}>{error}</Text>

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
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 35,
    backgroundColor: '#fff',
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: 'center',
    borderColor: '#ccc',
    borderBottomWidth: 1,
  },
  loginText: {
    color: 'blue',
    marginTop: 25,
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    marginTop: 25,
    textAlign: 'center',
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export {Register};
