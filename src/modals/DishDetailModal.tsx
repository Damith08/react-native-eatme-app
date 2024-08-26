import {View, Modal, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import AddButton from '../components/Buttons/AddButton';
import {Svgs} from '../theme/Svgs';
import {Colors} from '../theme/Colors';
import AppText from '../components/AppText';
import {FontFamily} from '../theme/FontFamily';

type Dish = {
  dishId: number;
  name: string;
  description: string;
  price: string;
  image: string;
  kcal?: string;
  popular?: string;
};

type DishDetailModalProps = {
  dish: Dish;
};

const DishDetailModal = ({dish}: DishDetailModalProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleOnPressCloseModal = () => {
    setModalVisible(!modalVisible);
  };
  const handleOnPressOpenModal = () => {
    setModalVisible(true);
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
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
              source={{uri: dish.image}}
              style={styles.image}
            />
          </View>
          <View style={styles.singleDishDetailContent}>
            <AppText
              text={dish.name}
              fontFamily={FontFamily.BOLD}
              fontSize={16}
            />
            <AppText
              text={dish.description}
              fontFamily={FontFamily.REGULAR}
              textAlign="justify"
              fontSize={14}
            />
            {dish.kcal && (
              <AppText
                text={dish.kcal}
                fontFamily={FontFamily.REGULAR}
                fontSize={14}
              />
            )}
            <AppText
              text={dish.price}
              fontFamily={FontFamily.REGULAR}
              fontSize={14}
            />
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
            <AppText
              text={dish.name}
              fontSize={16}
              fontFamily={FontFamily.BOLD}
            />
            <AppText
              text={truncateText(dish.description, 34)}
              fontFamily={FontFamily.REGULAR}
              fontSize={14}
            />
            {dish.kcal && (
              <AppText
                text={dish.kcal}
                fontFamily={FontFamily.REGULAR}
                fontSize={14}
              />
            )}
            <View style={styles.priceNPopularTextContainer}>
              <AppText
                text={dish.price}
                fontFamily={FontFamily.REGULAR}
                fontSize={14}
              />
              <View style={styles.dishPopularText}>
                <AppText
                  text={dish.popular}
                  fontFamily={FontFamily.REGULAR}
                  fontSize={14}
                  color={Colors.eatMeColor}
                />
              </View>
            </View>
          </View>
          <View style={styles.imageContainer}>
            <Image
              height={110}
              width={110}
              source={{uri: dish.image}}
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
    marginRight: 10,
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
    marginTop: 10,
  },
  image: {
    borderRadius: 4,
  },
  dishName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  priceNPopularTextContainer: {
    flexDirection: 'row',
  },
  dishPopularText: {
    color: Colors.eatMeColor,
    marginLeft: 10,
  },
});
export default DishDetailModal;
