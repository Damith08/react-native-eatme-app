import {ScrollView} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MenuRestaurantCard from '../../components/MenuRestaurantCard';
import PopularDishCategory from '../../components/PopularDishCategory';
import RestaurantDishesCategory from '../../components/RestaurantDishesCategory';

const MenuScreen = () => {
  return (
    <ScrollView>
      <Header />
      <MenuRestaurantCard />
      <PopularDishCategory />
      <RestaurantDishesCategory />
      <RestaurantDishesCategory />
      <RestaurantDishesCategory />
      <Footer />
    </ScrollView>
  );
};

export default MenuScreen;
