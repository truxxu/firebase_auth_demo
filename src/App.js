import React, {useContext, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Context as AuthContext} from './context/AuthContext';
import {navigationRef} from './RootNavigation';
import {Spinner} from './atoms';
import {Home, Login, Register} from './screens';

const Stack = createStackNavigator();

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
          <Stack.Screen name="Home" component={Home} />
        ) : (
          <React.Fragment>
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
          </React.Fragment>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
