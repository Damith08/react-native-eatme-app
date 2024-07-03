import {Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import React from 'react';
import PopularDishCard from './PopularDishCard';
import {View} from 'react-native-ui-lib';
import {POPULAR_DISHES_DATA} from '../data/data';

const PopularDishCategory = () => {
  return (
    <View style={styles.rootContainer}>
      <Text>Adults need around 2000 kcal a day</Text>
      <Text style={styles.categoryName}>Popular with other people</Text>
      <FlatList
        horizontal
        style={styles.cardContainer}
        data={POPULAR_DISHES_DATA}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.cardContainer}>
            <ScrollView horizontal={true}>
              <PopularDishCard
                dishImage={item.dishImage}
                name={item.name}
                kcal={item.kcal}
                price={item.price}
              />
            </ScrollView>
          </View>
        )}
      />
    </View>
  );
};

export default PopularDishCategory;

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 20,
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
