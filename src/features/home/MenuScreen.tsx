import {FlatList, ScrollView} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MenuRestaurantCard from '../../components/MenuRestaurantCard';
import PopularDishCategory from '../../components/PopularDishCategory';
import RestaurantDishesCategory from '../../components/RestaurantDishesCategory';
import {RESTAURANT_MENU_CATEGORY_DATA} from '../../data/data';
import {View} from 'react-native-ui-lib';

const MenuScreen = () => {
  return (
    <ScrollView>
      <Header />
      <MenuRestaurantCard />
      <PopularDishCategory />
      <View>
        <FlatList
          scrollEnabled={false}
          data={RESTAURANT_MENU_CATEGORY_DATA}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <RestaurantDishesCategory
              categoryName={item.categoryName}
              dishes={item.dishes}
            />
          )}
        />
        <Footer />
      </View>
    </ScrollView>
  );
};

export default MenuScreen;
