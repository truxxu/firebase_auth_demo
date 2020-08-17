import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const Spinner = () => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size="large" color="blue" />
    </View>
  );
};

const styles = StyleSheet.create({
  spinnerStyle: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export {Spinner};
