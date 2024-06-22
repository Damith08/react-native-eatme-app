import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import AccountModal from './AccountModal';
import {useNavigation} from '@react-navigation/native';
import {Svgs} from '../theme/Svgs';

const Header = () => {
  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate('AuthLanding');
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageSize}>
        <TouchableOpacity
          onPress={() => navigation.navigate('LandingScreen')}
          style={{width: 100, height: 100}}>
          <Svgs.Logo height={100} width={100} />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleOnPress}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <AccountModal />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageSize: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    marginRight: 20,
  },
  accountModal: {
    backgroundColor: 'red',
  },
});
