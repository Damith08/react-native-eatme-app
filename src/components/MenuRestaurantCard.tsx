import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {Svgs} from '../theme/Svgs';
import {Colors} from '../theme/Colors';
import {RESTAURANT_DATA} from '../data/data';
import LocationChangeModal from '../modals/LocationChangeModal';
import AppText from './AppText';
import {FontFamily} from '../theme/FontFamily';

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
                <View style={styles.groupOrderButtonText}>
                  <AppText text="Start group order" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.rootContainer}>
        <View style={styles.container}>
          <AppText
            text={
              `${RESTAURANT_DATA.restaurantName}` +
              ` - ` +
              `${RESTAURANT_DATA.address}`
            }
            fontSize={28}
            fontFamily={FontFamily.BOLD}
          />
          {RESTAURANT_DATA.tagLine.map(item => (
            <View key={item.tag} style={styles.dishesTagLineContainer}>
              <View style={styles.taglineText}>
                <AppText
                  id={item.dish1}
                  text={item.dish1}
                  fontFamily={FontFamily.REGULAR}
                />
              </View>
              <View style={styles.taglineText}>
                <AppText
                  id={item.dish2}
                  text={item.dish2}
                  fontFamily={FontFamily.REGULAR}
                />
              </View>
              <View style={styles.taglineText}>
                <AppText
                  id={item.tag}
                  text={item.tag}
                  fontFamily={FontFamily.REGULAR}
                />
              </View>
            </View>
          ))}

          <View style={styles.basicDetailsContainer}>
            <View style={styles.taglineText}>
              <AppText
                text={'Opens at ' + `${RESTAURANT_DATA.opensAt}`}
                fontFamily={FontFamily.REGULAR}
              />
            </View>
            <View style={styles.taglineText}>
              <AppText
                text={RESTAURANT_DATA.minimum}
                fontFamily={FontFamily.REGULAR}
              />
            </View>
            <View style={styles.taglineText}>
              <AppText
                text={RESTAURANT_DATA.delivery}
                fontFamily={FontFamily.REGULAR}
              />
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity>
              <View style={styles.button}>
                <Svgs.Info width={25} height={25} style={styles.svgIcon} />
                <View>
                  <AppText text="Info" fontFamily={FontFamily.REGULAR} />
                  <AppText
                    text="Map, allergens and hygiene rating"
                    fontFamily={FontFamily.REGULAR}
                  />
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
                  <AppText
                    text="4.7 Excellent (500+)"
                    fontFamily={FontFamily.REGULAR}
                  />
                  <View style={styles.ratingContainer}>
                    <Svgs.Happy
                      width={20}
                      height={22}
                      fill={Colors.success}
                      style={styles.ratingSvg}
                    />
                    <AppText
                      text="'Tasty food'"
                      fontFamily={FontFamily.REGULAR}
                    />
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
