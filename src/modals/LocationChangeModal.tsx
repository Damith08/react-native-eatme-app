import {View, Modal, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Svgs} from '../theme/Svgs';
import {Colors} from '../theme/Colors';
import AppText from '../components/AppText';
import {FontFamily} from '../theme/FontFamily';

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
                <View style={styles.locationConfirmText}>
                  <AppText
                    text="No location selected"
                    fontFamily={FontFamily.REGULAR}
                    color={Colors.error}
                    fontSize={16}
                  />
                </View>
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
                <AppText
                  text="Confirm"
                  fontFamily={FontFamily.SEMI_BOLD}
                  fontSize={16}
                  color={Colors.backgroundPrimary}
                />
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
              <View style={styles.locationText}>
                <AppText
                  text="No location selected"
                  fontFamily={FontFamily.REGULAR}
                  color={Colors.error}
                  fontSize={16}
                />
              </View>
            </View>
            <View style={styles.changeText}>
              <AppText
                text="Change"
                fontFamily={FontFamily.REGULAR}
                color={Colors.eatMeColor}
                fontSize={16}
              />
            </View>
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
    marginTop: 10,
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
  },
  locationConfirmButtonContainer: {
    marginHorizontal: 20,
    backgroundColor: Colors.eatMeColor,
    marginTop: 10,
    padding: 14,
    borderRadius: 3,
    alignItems: 'center',
  },
});
