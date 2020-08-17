import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

import firebase from '../api/firebase';
import {InputError} from '../atoms';

const Home = ({navigation}) => {
  const [user, setUser] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    async function getUser() {
      let response = await firebase.auth().currentUser.displayName;
      setUser(response);
    }
    getUser();
  }, []);

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
      <Text style={styles.textStyle}>Hello, {user}</Text>
      <InputError text={error} error={error} />
      <Button title="Logout" onPress={signOutUser} />
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
});

export {Home};
