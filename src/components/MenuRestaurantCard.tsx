import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Svgs} from '../theme/Svgs';
import {Colors} from '../theme/Colors';

const MenuRestaurantCard = () => {
  return (
    <>
      <View>
        <Text>Image</Text>
      </View>
      <View style={styles.container}>
        <Text>RestaurantName - Place</Text>
        <View style={styles.dishesTagLineContainer}>
          <Text>Chicken</Text>
          <Text>Chicken</Text>
          <Text>Chicken</Text>
        </View>
        <Text>Opens at:</Text>
        <TouchableOpacity>
          <View style={styles.buttonContainer}>
            <Svgs.Info width={25} height={25} style={styles.svgIcon} />
            <View>
              <Text>Info</Text>
              <Text>Map, allergens and hygiene rating</Text>
            </View>
            <View style={styles.forwardIcon}>
              <Svgs.Forward height={20} width={20} fill={Colors.eatMeColor} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.buttonContainer}>
            <Svgs.Star
              width={22}
              height={22}
              style={styles.svgIcon}
              fill={Colors.success}
            />
            <View>
              <Text>4.7 Excellent (500+)</Text>
              <View style={styles.ratingContainer}>
                <Svgs.Happy
                  width={20}
                  height={20}
                  fill={Colors.success}
                  style={styles.ratingSvg}
                />
                <Text>'Tasty food'</Text>
              </View>
            </View>
            <View style={styles.forwardIcon}>
              <Svgs.Forward height={20} width={20} fill={Colors.eatMeColor} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.buttonContainer}>
            <Svgs.DeliveryBike width={22} height={22} style={styles.svgIcon} />
            <View>
              <Text style={styles.locationText}>Location</Text>
            </View>
            <Text style={styles.changeText}>Change</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default MenuRestaurantCard;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    marginLeft: 25,
    marginRight: 25,
  },
  dishesTagLineContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  svgIcon: {
    marginRight: 10,
    marginTop: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginRight: 115,
  },
  ratingSvg: {
    marginRight: 5,
  },
  forwardIcon: {
    justifyContent: 'center',
    marginLeft: 80,
  },
  locationText: {
    color: Colors.eatMeColor,
    marginTop: 11,
  },
  changeText: {
    color: Colors.eatMeColor,
    marginLeft: 200,
    marginTop: 10,
  },
});
