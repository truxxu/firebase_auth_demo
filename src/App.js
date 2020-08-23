import React, {useContext, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Context as AuthContext} from './context/AuthContext';
import {navigationRef} from './RootNavigation';
import {Spinner} from './atoms';
import {Home, Login, Register, Welcome, Profile} from './screens';

const Stack = createStackNavigator();
const authStack = () => {
  return (
    <Stack.Navigator screenOptions={NavigationOptions}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const tabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const NavigationOptions = {headerShown: false};

const App = () => {
  const {getUser, state} = useContext(AuthContext);

  useEffect(() => {
    getUser();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (state.isLoading) {
    return <Spinner />;
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        {state.user ? (
          <Stack.Screen
            name="tabNavigator"
            component={tabNavigator}
            options={NavigationOptions}
          />
        ) : (
          <Stack.Screen
            name="authStack"
            component={authStack}
            options={NavigationOptions}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
