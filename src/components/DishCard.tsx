import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import AddButton from './AddButton';
import {Images} from '../theme/Images';
import {Colors} from '../theme/Colors';

const DishCard = () => {
  const handleOnPressSelectDish = () => {};
  return (
    <TouchableOpacity
      style={styles.categoryContainer}
      onPress={handleOnPressSelectDish}>
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
  );
};

export default DishCard;

const styles = StyleSheet.create({
  categoryContainer: {
    backgroundColor: Colors.backgroundPrimary,
    marginBottom: 3,
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
  imageContainer: {
    marginRight: 10,
    flex: 3,
  },
  image: {
    borderRadius: 1,
  },
  dishName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
