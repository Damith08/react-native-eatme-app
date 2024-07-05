import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import AddButton from './AddButton';
import {Svgs} from '../theme/Svgs';
import {Colors} from '../theme/Colors';

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
            <Text style={styles.dishName}>{dish.name}</Text>
            <Text>{dish.description}</Text>
            {dish.kcal && <Text>{dish.kcal}</Text>}
            <Text>{dish.price}</Text>
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
            <Text style={styles.dishName}>{dish.name}</Text>
            <Text>{truncateText(dish.description, 34)}</Text>
            {dish.kcal && <Text>{dish.kcal}</Text>}
            <View style={styles.priceNPopularTextContainer}>
              <Text>{dish.price}</Text>
              <Text style={styles.dishPopularText}>{dish.popular}</Text>
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
    flex: 3,
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
