import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Svgs} from '../theme/Svgs';
import {View} from 'react-native-ui-lib';

const AddButton = () => {
  const handleOnPressAddDish = () => {};

  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={handleOnPressAddDish}>
      <View style={styles.addIcon}>
        <Svgs.Add width={24} height={24} />
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
  },
  addIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },
});
