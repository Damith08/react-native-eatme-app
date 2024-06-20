import {View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import AccountModal from './AccountModal';

const HeaderComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageSize}>
        <Image
          style={styles.imageSize}
          source={require('../assets/logo-text.svg')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <AccountModal />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageSize: {
    width: 20,
    height: 20,
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
