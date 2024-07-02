import {Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import PopularDishCard from './PopularDishCard';
import {View} from 'react-native-ui-lib';

const PopularDishCategory = () => {
  return (
    <View style={styles.rootContainer}>
      <Text>Adults need around 2000 kcal a day</Text>
      <Text style={styles.categoryName}>Popular with other people</Text>
      <ScrollView horizontal={true} style={styles.cardContainer}>
        <PopularDishCard />
        <PopularDishCard />
        <PopularDishCard />
        <PopularDishCard />
        <PopularDishCard />
        <PopularDishCard />
        <PopularDishCard />
        <PopularDishCard />
        <PopularDishCard />
        <PopularDishCard />
        <PopularDishCard />
      </ScrollView>
    </View>
  );
};

export default PopularDishCategory;

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 25,
    marginRight: 25,
  },
  cardContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  categoryName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
