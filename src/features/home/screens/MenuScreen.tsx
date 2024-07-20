import {FlatList, ListRenderItemInfo} from 'react-native';
import React, {useCallback, useEffect, useRef} from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import MenuRestaurantCard from '../components/MenuRestaurantCard';
import PopularDishCategory from '../components/PopularDishCategory';
import HorizontalCategoriesBar from '../components/HorizontalCategoriesBar';
import {useAppSelector} from '../../../hooks/useAppSelector';
import {GROUPED_CATEGORIES} from '../../../data/data';
import RestaurantDishesCategory from '../components/RestaurantDishesCategory';
import {IDish} from '../../../types/menu.types';

const MenuScreen = () => {
  const {selectedCategoryId} = useAppSelector(state => state.menu);
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    const foundIndex = GROUPED_CATEGORIES.findIndex(
      item => item[0].dishCategory._id === selectedCategoryId,
    );
    if (foundIndex > -1) {
      flatListRef.current?.scrollToIndex({index: foundIndex, animated: true});
    }
  }, [selectedCategoryId]);

  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<IDish[]>) => (
      <RestaurantDishesCategory
        categoryName={item[0].dishCategory.name}
        dishes={item}
      />
    ),
    [],
  );

  return (
    <FlatList
      ListHeaderComponent={
        <>
          <Header />
          <MenuRestaurantCard />
          <PopularDishCategory />
          <HorizontalCategoriesBar />
        </>
      }
      ref={flatListRef}
      onScrollToIndexFailed={() => {
        console.log('Scroll fail');
      }}
      ListFooterComponent={<Footer />}
      scrollEnabled={true}
      data={GROUPED_CATEGORIES}
      renderItem={renderItem}
    />
  );
};

export default MenuScreen;
