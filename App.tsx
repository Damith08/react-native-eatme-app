/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import type {PropsWithChildren} from 'react';

import {StatusBar} from 'react-native';
import AuthLanding from './features/auth/AuthLanding';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingScreen from './features/home/LandingScreen';
import {NavigationContainer} from '@react-navigation/native';

export type RootStackPramList = {
  LandingScreen: undefined;
  AuthLanding: undefined;
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
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default App;
