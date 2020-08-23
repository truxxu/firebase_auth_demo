import React, {useContext} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

import {Context as AuthContext} from '../context/AuthContext';
import {InputError, Spinner} from '../atoms';

const Profile = ({navigation}) => {
  const {logOutUser, state} = useContext(AuthContext);
  const {isLoading, error} = state;
  const user = state.user.displayName || 'User';

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Hello, {user}</Text>
      <InputError text={error} error={error} />
      <Button title="Logout" onPress={logOutUser} />
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

export {Profile};
