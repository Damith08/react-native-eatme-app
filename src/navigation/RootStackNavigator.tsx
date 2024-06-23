import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROOT_STACK_SCREENS} from '../constants/NavigationConstants';
import LandingScreen from '../features/home/LandingScreen';
import AuthLanding from '../features/auth/AuthLanding';
import EmailLanding from '../features/auth/EmailLanding';
import ForgetLanding from '../features/auth/ForgetLanding';
import RegisterLanding from '../features/auth/RegisterLanding';
import MenuScreen from '../features/home/MenuScreen';

export type RootStackParams = {
  [ROOT_STACK_SCREENS.AUTH]: undefined;
  [ROOT_STACK_SCREENS.EMAIL]: undefined;
  [ROOT_STACK_SCREENS.FORGET]: undefined;
  [ROOT_STACK_SCREENS.LANDING_SCREEN]: undefined;
  [ROOT_STACK_SCREENS.MENU_SCREEN]: undefined;
  [ROOT_STACK_SCREENS.REGISTER]: undefined;
};

const Stack = createNativeStackNavigator();

const RootStackNavigator = (): React.JSX.Element => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={ROOT_STACK_SCREENS.LANDING_SCREEN}
        component={LandingScreen}
      />
      <Stack.Screen name={ROOT_STACK_SCREENS.AUTH} component={AuthLanding} />
      <Stack.Screen name={ROOT_STACK_SCREENS.EMAIL} component={EmailLanding} />
      <Stack.Screen
        name={ROOT_STACK_SCREENS.FORGET}
        component={ForgetLanding}
      />
      <Stack.Screen
        name={ROOT_STACK_SCREENS.REGISTER}
        component={RegisterLanding}
      />
      <Stack.Screen
        name={ROOT_STACK_SCREENS.MENU_SCREEN}
        component={MenuScreen}
      />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
