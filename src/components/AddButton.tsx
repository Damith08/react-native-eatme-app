import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Svgs} from '../theme/Svgs';
import {View} from 'react-native-ui-lib';
import {Colors} from '../theme/Colors';

const AddButton = () => {
  const handleOnPressAddDish = () => {};

  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={handleOnPressAddDish}>
      <View style={styles.addIconContainer}>
        <Svgs.Add width={20} height={20} fill={Colors.placeholderTextColor} />
      </View>
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderWidth: 0.25,
    borderRadius: 2,
    marginTop: 10,
    marginBottom: 1,
    flex: 1,
  },
  addIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
});
