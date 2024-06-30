import {View} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MenuRestaurantCard from '../../components/MenuRestaurantCard';

const MenuScreen = () => {
  return (
    <View>
      <Header />
      <MenuRestaurantCard />
      <Footer />
    </View>
  );
};

export default MenuScreen;
