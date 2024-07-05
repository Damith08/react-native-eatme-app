import {View, Text, Modal, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Svgs} from '../theme/Svgs';
import {Colors} from '../theme/Colors';

const LocationChangeModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleOnPressLocationConfirm = () => {};
  const handleOnPressOpenLocationConfirmBox = () => {
    setModalVisible(true);
  };
  const handleOnPressCloseLocationConfirmBox = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleOnPressCloseLocationConfirmBox}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.locationConfirmContainer}>
              <View style={styles.locationConfirmContainerHeading}>
                <Svgs.Location
                  height={25}
                  width={25}
                  fill={Colors.placeholderTextColor}
                />
                <Text style={styles.locationConfirmText}>
                  No location selected
                </Text>
              </View>
              <View>
                <TouchableOpacity
                  onPress={handleOnPressCloseLocationConfirmBox}>
                  <Svgs.Close height={25} width={25} fill={Colors.eatMeColor} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.locationConfirmButtonContainer}>
              <TouchableOpacity onPress={handleOnPressLocationConfirm}>
                <Text style={styles.locationConfirmButtonText}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleOnPressOpenLocationConfirmBox}>
          <View style={styles.button}>
            <View style={styles.iconNLocationText}>
              <Svgs.DeliveryBike
                width={22}
                height={22}
                style={styles.svgIcon}
              />
              <Text style={styles.locationText}>No location selected</Text>
            </View>
            <Text style={styles.changeText}>Change</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default LocationChangeModal;

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: 10,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconNLocationText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  svgIcon: {
    marginRight: 10,
    marginTop: 10,
  },
  locationText: {
    color: Colors.error,
    marginTop: 11,
  },
  changeText: {
    color: Colors.eatMeColor,
    marginTop: 10,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalView: {
    backgroundColor: Colors.backgroundPrimary,
    width: '100%',
    height: 145,
  },
  locationConfirmContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20,
  },
  locationConfirmContainerHeading: {
    flexDirection: 'row',
  },
  locationConfirmText: {
    marginLeft: 10,
    fontSize: 16,
    color: Colors.error,
  },
  locationConfirmButtonContainer: {
    marginHorizontal: 20,
    backgroundColor: Colors.eatMeColor,
    marginTop: 10,
    padding: 14,
    borderRadius: 3,
    alignItems: 'center',
  },
  locationConfirmButtonText: {
    justifyContent: 'center',
    color: Colors.backgroundPrimary,
    fontWeight: 'bold',
  },
});
