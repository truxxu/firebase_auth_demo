import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Firebase Demo App</Text>
      <Button
        onPress={() => navigation.navigate('Register')}
        title="Start here"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-around',
    padding: 35,
    backgroundColor: '#fff',
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export {Welcome};
