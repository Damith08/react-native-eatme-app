/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootStackNavigator from './navigation/RootStackNavigator';

function App(): React.JSX.Element {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </>
  );
}

export default App;
