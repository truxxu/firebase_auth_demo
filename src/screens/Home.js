import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {ToDoForm} from '../molecules';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ToDoForm />
      <Text>Home goes here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    padding: 35,
    backgroundColor: '#fff',
  },
});

export {Home};
