import {View, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import DishDetailModal from '../modals/DishDetailModal';
import {Colors} from '../theme/Colors';
import AppText from './AppText';
import {FontFamily} from '../theme/FontFamily';

type Dishes = {
  dishId: number;
  name: string;
  description: string;
  price: string;
  image: string;
  kcal?: string;
  popular?: string;
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
    <FlatList
      ListHeaderComponent={
        <View style={styles.rootContainer}>
          <AppText
            text={categoryName}
            fontSize={20}
            fontFamily={FontFamily.BOLD}
          />
        </View>
      }
      data={dishes}
      keyExtractor={item => item.dishId.toString()}
      renderItem={({item}) => (
        <View style={styles.categoryContainer}>
          <DishDetailModal dish={item} />
        </View>
      )}
    />
  );
};

export default RestaurantDishesCategory;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 10,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 20,
  },
  categoryName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  categoryContainer: {
    marginBottom: 3,
    backgroundColor: Colors.backgroundPrimary,
  },
});
