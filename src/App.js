import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Home, Login, Register} from './screens';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Register"
        screenOptions={{
          headerStyle: {
            height: 40,
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 15,
          },
        }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Login'}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={({title: 'Register'}, {headerLeft: null})}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={({title: 'Home'}, {headerLeft: null})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
