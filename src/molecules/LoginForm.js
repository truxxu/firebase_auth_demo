import React from 'react';
import {View} from 'react-native';

import {Input, InputError} from '../atoms';

const inputStyle = {
  width: '100%',
  alignSelf: 'center',
  borderColor: '#ccc',
  borderBottomWidth: 1,
  marginBottom: 15,
};

const LoginForm = ({control, errors}) => {
  return (
    <View>
      <InputError text="Plase introduce a valid email" error={errors.email} />
      <Input
        name="email"
        control={control}
        placeholder="Email"
        rules={{required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/}}
        autoCorrect={false}
        style={inputStyle}
      />
      <Input
        name="password"
        control={control}
        placeholder="Password"
        rules={{required: true}}
        autoCorrect={false}
        secureTextEntry
        style={inputStyle}
      />
    </View>
  );
};

export {LoginForm};
