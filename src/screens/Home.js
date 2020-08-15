import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

import firebase from '../../database/firebase';

const Home = ({navigation}) => {
  const [error, setError] = useState('');
  const name = firebase.auth().currentUser.displayName;

  const signOutUser = async () => {
    try {
      await firebase.auth().signOut();
      navigation.navigate('Login');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Hello, {name}</Text>
      <Text style={styles.errorText}>{error}</Text>
      <Button title="Logout" onPress={() => signOutUser()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 35,
    backgroundColor: '#fff',
  },
  textStyle: {
    fontSize: 15,
    marginBottom: 20,
  },
  errorText: {
    color: 'red',
    marginTop: 25,
    textAlign: 'center',
  },
});

export {Home};
