import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

import {Controller} from 'react-hook-form';

const Input = ({name, control, rules, ...rest}) => {
  return (
    <Controller
      control={control}
      render={({onChange, onBlur, value}) => (
        <TextInput
          style={styles.inputStyle}
          onBlur={onBlur}
          onChangeText={(value) => onChange(value)}
          value={value}
          {...rest}
        />
      )}
      name={name}
      rules={rules}
      defaultValue=""
    />
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    width: '100%',
    alignSelf: 'center',
    borderColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 15,
  },
});

export {Input};
