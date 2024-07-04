import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import DishDetailModal from './DishDetailModal';
import {Colors} from '../theme/Colors';

type Dishes = {
  dishId: number;
  name: string;
  description: string;
  price: string;
  image: string;
  kcal?: string;
};

type RestaurantDishesCategoryProps = {
  categoryName: string;
  dishes: Dishes[];
};

const RestaurantDishesCategory = ({
  categoryName,
  dishes,
}: RestaurantDishesCategoryProps) => {
  return (
    <>
      <View style={styles.rootContainer}>
        <Text style={styles.categoryName}>{categoryName}</Text>
      </View>
      <FlatList
        data={dishes}
        keyExtractor={item => item.dishId.toString()}
        renderItem={({item}) => (
          <View style={styles.categoryContainer}>
            <DishDetailModal dish={item} />
          </View>
        )}
      />
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
  categoryContainer: {
    marginBottom: 3,
    backgroundColor: Colors.backgroundPrimary,
  },
});
