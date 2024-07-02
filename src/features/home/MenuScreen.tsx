import {View} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MenuRestaurantCard from '../../components/MenuRestaurantCard';
import PopularDishCategory from '../../components/PopularDishCategory';

const MenuScreen = () => {
  return (
    <View>
      <Header />
      <MenuRestaurantCard />
      <PopularDishCategory />
      <Footer />
    </View>
  );
};

export default MenuScreen;
