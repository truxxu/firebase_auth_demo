import React from 'react';
import {View} from 'react-native';

import {Input, InputError} from '../atoms';

const RegisterForm = ({control, errors}) => {
  return (
    <View>
      <InputError text="Name is required" error={errors.displayName} />
      <InputError text="Plase introduce a valid email" error={errors.email} />
      <InputError
        text="Plase introduce a valid password"
        error={errors.password}
      />
      <Input
        name="displayName"
        control={control}
        placeholder="Name"
        rules={{required: true}}
        autoCorrect={false}
      />
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
        rules={{required: true, minLength: 6}}
        autoCorrect={false}
        secureTextEntry
      />
    </View>
  );
};

export {RegisterForm};
