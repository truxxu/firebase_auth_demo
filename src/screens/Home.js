import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

import {useLogOut} from '../hooks/useAuth';
import {InputError, Spinner} from '../atoms';

const Home = ({navigation}) => {
  const [signOutUser, isLoading, error] = useLogOut();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Hello, user</Text>
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
