import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {Images} from '../theme/Images';
import AddButton from './AddButton';
import {Svgs} from '../theme/Svgs';
import {Colors} from '../theme/Colors';

const DishDetailModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleOnPressCloseModal = () => {
    setModalVisible(!modalVisible);
  };
  const handleOnPressOpenModal = () => {
    setModalVisible(true);
  };
  const handleOnPressAddDish = () => {};

  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleOnPressCloseModal}>
        <View style={styles.modalView}>
          <TouchableOpacity onPress={handleOnPressCloseModal}>
            <Svgs.Close height={45} width={45} fill={Colors.eatMeColor} />
          </TouchableOpacity>
          <View>
            <Image
              height={300}
              width={300}
              source={{uri: Images.dishImage}}
              style={styles.image}
            />
          </View>
          <View style={styles.singleDishDetailContent}>
            <Text style={styles.dishName}>Dish Name</Text>
            <Text>Dish Description</Text>
            <Text>Dish Price</Text>
          </View>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handleOnPressAddDish}>
            <Svgs.Add width={30} height={30} fill={Colors.backgroundPrimary} />
          </TouchableOpacity>
        </View>
      </Modal>
      <TouchableOpacity onPress={handleOnPressOpenModal}>
        <View style={styles.categoryContent}>
          <View style={styles.dishDetailsContainer}>
            <Text style={styles.dishName}>Dish Name</Text>
            <Text>Dish Description</Text>
            <Text>Dish Price</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image
              height={110}
              width={110}
              source={{uri: Images.dishImage}}
              style={styles.image}
            />
          </View>
          <AddButton />
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: Colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  singleDishDetailContent: {
    marginBottom: 10,
  },
  categoryContent: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 25,
    marginRight: 25,
  },
  dishDetailsContainer: {
    flex: 4,
    flexDirection: 'column',
  },
  buttonContainer: {
    flex: 1,
    padding: 28,
    backgroundColor: Colors.eatMeColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  imageContainer: {
    marginRight: 10,
    flex: 3,
  },
  image: {
    borderRadius: 4,
  },
  dishName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default DishDetailModal;
