import {FlatList, ScrollView} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MenuRestaurantCard from '../../components/MenuRestaurantCard';
import PopularDishCategory from '../../components/PopularDishCategory';
import RestaurantDishesCategory from '../../components/RestaurantDishesCategory';
import {RESTAURANT_MENU_CATEGORY_DATA} from '../../data/data';
import {View} from 'react-native-ui-lib';
import HorizontalScrollBar from '../../components/HorizontalScrollBar';

const MenuScreen = () => {
  return (
    <ScrollView StickyHeaderComponent={Header}>
      <View>
        <FlatList
          ListHeaderComponent={
            <>
              <Header />
              <MenuRestaurantCard />
              <HorizontalScrollBar />
              <PopularDishCategory />
            </>
          }
          ListFooterComponent={<Footer />}
          stickyHeaderIndices={[0]}
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
      </View>
    </ScrollView>
  );
};

export default MenuScreen;
