import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {RESTAURANT_MENU_CATEGORY_DATA} from '../data/data';
import {Colors} from '../theme/Colors';

const HorizontalScrollBar = () => {
  return (
    <View>
      <FlatList
        horizontal
        data={RESTAURANT_MENU_CATEGORY_DATA}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.scrollBarContainer}>
            <View>
              <TouchableOpacity style={styles.scrollBarChips}>
                <Text style={styles.scrollBarText}>{item.categoryName}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default HorizontalScrollBar;

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
  scrollBarChips: {
    backgroundColor: Colors.eatMeColor,
    padding: 5,
    borderRadius: 50,
  },
  scrollBarText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.backgroundPrimary,
  },
});
