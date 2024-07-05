import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {Svgs} from '../theme/Svgs';
import {Colors} from '../theme/Colors';
import {RESTAURANT_DATA} from '../data/data';
import LocationChangeModal from './LocationChangeModal';

const MenuRestaurantCard = () => {
  return (
    <>
      <View style={styles.coverPhotoContainer}>
        <ImageBackground
          resizeMode="cover"
          source={{uri: RESTAURANT_DATA.restaurantImage}}>
          <View style={styles.backButtonContainer}>
            <TouchableOpacity style={styles.backButton}>
              <Svgs.Back height={25} width={25} fill={Colors.eatMeColor} />
            </TouchableOpacity>
          </View>
          <View style={styles.coverPhoto}>
            <View style={styles.groupOrderButtonContainer}>
              <TouchableOpacity style={styles.groupOrderButton}>
                <Svgs.Group height={20} width={20} fill={Colors.eatMeColor} />
                <Text style={styles.groupOrderButtonText}>
                  Start group order
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.rootContainer}>
        <View style={styles.container}>
          <Text style={styles.restaurantName}>
            {RESTAURANT_DATA.restaurantName} - {RESTAURANT_DATA.address}
          </Text>
          {RESTAURANT_DATA.tagLine.map(item => (
            <View key={item.tag} style={styles.dishesTagLineContainer}>
              <Text key={item.dish1} style={styles.taglineText}>
                {item.dish1}
              </Text>
              <Text key={item.dish2} style={styles.taglineText}>
                .{item.dish2}
              </Text>
              <Text key={item.tag} style={styles.taglineText}>
                .{item.tag}
              </Text>
            </View>
          ))}

          <View style={styles.basicDetailsContainer}>
            <Text style={styles.taglineText}>
              Opens at {RESTAURANT_DATA.opensAt}
            </Text>
            <Text style={styles.taglineText}>{RESTAURANT_DATA.minimum}</Text>
            <Text style={styles.taglineText}>{RESTAURANT_DATA.delivery}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity>
              <View style={styles.button}>
                <Svgs.Info width={25} height={25} style={styles.svgIcon} />
                <View>
                  <Text>Info</Text>
                  <Text>Map, allergens and hygiene rating</Text>
                </View>
                <View style={styles.forwardIcon}>
                  <Svgs.Forward
                    height={20}
                    width={20}
                    fill={Colors.eatMeColor}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity>
              <View style={styles.button}>
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
                  <Svgs.Forward
                    height={20}
                    width={20}
                    fill={Colors.eatMeColor}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <LocationChangeModal />
        </View>
      </View>
    </>
  );
};

export default MenuRestaurantCard;

const styles = StyleSheet.create({
  coverPhotoContainer: {
    marginBottom: 10,
  },
  backButtonContainer: {
    alignItems: 'flex-start',
  },
  backButton: {
    marginTop: 10,
    backgroundColor: Colors.backgroundPrimary,
    padding: 10,
    borderRadius: 1000,
    marginLeft: 20,
  },
  coverPhoto: {
    paddingTop: 200,
  },
  groupOrderButtonContainer: {
    alignItems: 'flex-end',
  },
  groupOrderButton: {
    backgroundColor: Colors.backgroundPrimary,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    marginRight: 20,
  },
  groupOrderButtonText: {marginLeft: 10},
  rootContainer: {
    backgroundColor: Colors.backgroundPrimary,
    paddingTop: 10,
  },
  container: {
    marginBottom: 20,
    marginLeft: 25,
    marginRight: 25,
  },
  restaurantName: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  dishesTagLineContainer: {
    flexDirection: 'row',
  },
  taglineText: {
    marginRight: 10,
  },
  basicDetailsContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  buttonContainer: {
    marginBottom: 10,
  },
  button: {
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
});
