import React from 'react';
import {View} from 'react-native';

import {Input, InputError} from '../atoms';

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
      />
      <Input
        name="password"
        control={control}
        placeholder="Password"
        rules={{required: true}}
        autoCorrect={false}
        secureTextEntry
      />
    </View>
  );
};

export {LoginForm};
