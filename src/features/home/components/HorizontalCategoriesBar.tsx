import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ListRenderItemInfo,
  ActivityIndicator,
} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {Colors} from '../../../theme/Colors';
import AppText from '../../../components/AppText';
import {FontFamily} from '../../../theme/FontFamily';
import {ICategory} from '../../../types/menu.types';
import {useAppDispatch} from '../../../hooks/useAppDispatch';
import {setSelectedCategoryId} from '../../../store/slices/menuSlice';
import {useAppSelector} from '../../../hooks/useAppSelector';
import {requestToCategories} from '../../../store/slices/categorySlice';

const HorizontalCategoriesBar = () => {
  const {loading, category} = useAppSelector(state => state.category);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(requestToCategories());
  }, [dispatch]);

  const handleOnPress = useCallback(
    (id: string) => {
      dispatch(setSelectedCategoryId(id));
    },
    [dispatch],
  );

  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<ICategory>) => (
      <TouchableOpacity
        style={styles.chip}
        onPress={() => handleOnPress(item._id)}>
        <AppText
          text={item.name}
          fontFamily={FontFamily.SEMI_BOLD}
          fontSize={14}
          color={Colors.backgroundPrimary}
        />
      </TouchableOpacity>
    ),
    [handleOnPress],
  );

  if (loading) {
    return <ActivityIndicator size="large" color={Colors.eatMeColor} />;
  }

  if (!category) {
    return (
      <AppText
        text="Failed to load category details"
        fontFamily={FontFamily.REGULAR}
        fontSize={14}
      />
    );
  }

  return (
    <View>
      <FlatList
        horizontal
        data={category}
        keyExtractor={item => item._id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default HorizontalCategoriesBar;

const styles = StyleSheet.create({
  scrollBarContainer: {
    backgroundColor: Colors.backgroundPrimary,
    padding: 27,
    marginTop: 1.5,
    marginBottom: 10,
    shadowColor: Colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 0.25,
  },
  chip: {
    backgroundColor: Colors.eatMeColor,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    borderRadius: 50,
  },
  scrollBarText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.backgroundPrimary,
  },
});
