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

import firebase from '../../database/firebase';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setError('');
  };

  const logInUser = async () => {
    if (email === '' && password === '') {
      Alert.alert('Enter details to signin!');
    } else {
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
      <Text style={styles.errorText}>{error}</Text>
      <TextInput
        style={styles.inputStyle}
        placeholder="Email"
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Password"
        value={password}
        onChangeText={(password) => setPassword(password)}
        maxLength={15}
        secureTextEntry={true}
      />
      <Button title="Sign in" onPress={() => logInUser()} />
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
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: 'center',
    borderColor: '#ccc',
    borderBottomWidth: 1,
  },
  loginText: {
    color: '#3740FE',
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

export {Login};
