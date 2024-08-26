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
import {Provider} from 'react-redux';
import {store, persistor} from './store';
import {PersistGate} from 'redux-persist/integration/react';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar barStyle="light-content" />
        <NavigationContainer>
          <RootStackNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
