import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Login, Register, Welcome} from '../screens';

const Stack = createStackNavigator();
const NavigationOptions = {headerShown: false};

const AuthFlow = () => {
  return (
    <Stack.Navigator screenOptions={NavigationOptions}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export {AuthFlow};
