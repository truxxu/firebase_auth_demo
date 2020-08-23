import React, {useContext, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Context as AuthContext} from './context/AuthContext';
import {navigationRef} from './RootNavigation';
import {Spinner} from './atoms';
import {AuthFlow, MainFlow} from './navigation';

const Stack = createStackNavigator();
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
            name="MainFlow"
            component={MainFlow}
            options={NavigationOptions}
          />
        ) : (
          <Stack.Screen
            name="AuthFlow"
            component={AuthFlow}
            options={NavigationOptions}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
