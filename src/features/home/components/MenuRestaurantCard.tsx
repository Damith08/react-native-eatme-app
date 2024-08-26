import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect} from 'react';
import {Svgs} from '../../../theme/Svgs';
import {Colors} from '../../../theme/Colors';
import LocationChangeModal from '../../../modals/LocationChangeModal';
import AppText from '../../../components/AppText';
import {FontFamily} from '../../../theme/FontFamily';
import {fetchRestaurantDetails} from '../../../store/slices/restaurantSlice';
import {useAppSelector} from '../../../hooks/useAppSelector';
import {useAppDispatch} from '../../../hooks/useAppDispatch';

const MenuRestaurantCard = () => {
  const {restaurant, loading} = useAppSelector(state => state.restaurant);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchRestaurantDetails());
  }, [dispatch]);

  if (loading) {
    return <ActivityIndicator size="large" color={Colors.eatMeColor} />;
  }

  if (!restaurant) {
    return (
      <AppText
        text="Failed to load restaurant details"
        fontFamily={FontFamily.REGULAR}
        fontSize={14}
      />
    );
  }

  return (
    <>
      <View style={styles.coverPhotoContainer}>
        <ImageBackground resizeMode="cover" source={{uri: restaurant.image}}>
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
            text={restaurant.name}
            fontSize={28}
            fontFamily={FontFamily.BOLD}
          />
          <View style={styles.dishesTagLineContainer}>
            <View style={styles.taglineText}>
              <AppText
                text={restaurant.tag[0]}
                fontFamily={FontFamily.REGULAR}
              />
            </View>
            <View style={styles.taglineText}>
              <AppText
                text={restaurant.tag[1]}
                fontFamily={FontFamily.REGULAR}
              />
            </View>
            <View style={styles.taglineText}>
              <AppText
                text={restaurant.tag[2]}
                fontFamily={FontFamily.REGULAR}
              />
            </View>
          </View>

          <View style={styles.basicDetailsContainer}>
            <View style={styles.taglineText}>
              <AppText
                text={'Opens at ' + `${restaurant.openAt}`}
                fontFamily={FontFamily.REGULAR}
              />
            </View>
            <View style={styles.taglineText}>
              <AppText
                text={
                  '$ ' +
                  `${restaurant.minimum.toFixed(2).toString()}` +
                  ' minimum'
                }
                fontFamily={FontFamily.REGULAR}
              />
            </View>
            <View style={styles.taglineText}>
              <AppText
                text={
                  '$ ' +
                  `${restaurant.deliveryCharge.toFixed(2).toString()}` +
                  ' delivery'
                }
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
