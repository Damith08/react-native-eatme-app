import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import DishCard from './DishCard';

const RestaurantDishesCategory = () => {
  return (
    <>
      <View style={styles.rootContainer}>
        <Text style={styles.categoryName}>Category</Text>
      </View>
      <DishCard />
      <DishCard />
      <DishCard />
      <DishCard />
    </>
  );
};

export default RestaurantDishesCategory;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 10,
    marginLeft: 25,
    marginRight: 25,
  },
  categoryName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
