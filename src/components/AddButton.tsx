import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Svgs} from '../theme/Svgs';
import {View} from 'react-native-ui-lib';
import {Colors} from '../theme/Colors';

const AddButton = () => {
  const handleOnPressAddDish = () => {};

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={handleOnPressAddDish}>
        <View style={styles.addIconContainer}>
          <Svgs.Add width={20} height={20} fill={Colors.placeholderTextColor} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderWidth: 0.25,
    borderRadius: 2,
    marginTop: 10,
    padding: 10,
    justifyContent: 'center',
  },
  addIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
