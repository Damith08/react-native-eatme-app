/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import AuthLanding from './features/auth/AuthLanding';
import LandingScreen from './features/home/LandingScreen';
import ForgetLanding from './features/auth/ForgetLanding';
import EmailLanding from './features/auth/EmailLanding';
import RegisterLanding from './features/auth/RegisterLanding';

export type RootStackPramList = {
  LandingScreen: undefined;
  AuthLanding: undefined;
  EmailLanding: undefined;
  ForgetLanding: undefined;
  RegisterLanding: undefined;
};
const Stack = createNativeStackNavigator<RootStackPramList>();
function App(): React.JSX.Element {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LandingScreen"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="LandingScreen" component={LandingScreen} />
          <Stack.Screen name="AuthLanding" component={AuthLanding} />
          <Stack.Screen name="EmailLanding" component={EmailLanding} />
          <Stack.Screen name="ForgetLanding" component={ForgetLanding} />
          <Stack.Screen name="RegisterLanding" component={RegisterLanding} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
