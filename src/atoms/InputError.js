import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const InputError = ({text, error}) => {
  if (error) {
    return (
      <View>
        <Text style={styles.errorStyle}>{text}</Text>
      </View>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  errorStyle: {
    color: 'red',
    textAlign: 'center',
    marginVertical: 5,
  },
});

export {InputError};
