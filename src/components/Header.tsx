import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import AccountModal from './AccountModal';
import {useNavigation} from '@react-navigation/native';
import {Svgs} from '../theme/Svgs';
import {ROOT_STACK_SCREENS} from '../constants/NavigationConstants';
import SquareButton from './SquareButton';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../navigation/RootStackNavigator';

const Header = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const authLandingHandler = () => {
    navigation.navigate(ROOT_STACK_SCREENS.AUTH);
  };

  const landingScreenHandler = () => {
    navigation.navigate(ROOT_STACK_SCREENS.LANDING_SCREEN);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={landingScreenHandler}>
        <Svgs.Logo height={70} width={90} />
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <SquareButton onPress={authLandingHandler} Icon={Svgs.Home} />
        <View style={styles.button}>
          <AccountModal />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 11,
  },
  button: {
    marginRight: 10,
  },
});
