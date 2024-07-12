import {
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Header from './Header';
import {Images} from '../theme/Images';
import AppText from './AppText';
import {FontFamily} from '../theme/FontFamily';
import {Colors} from '../theme/Colors';
import {Svgs} from '../theme/Svgs';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ROOT_STACK_SCREENS} from '../constants/NavigationConstants';
import {RootStackParams} from '../navigation/RootStackNavigator';

const SectionDetail = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const authLandingHandler = () => {
    navigation.navigate(ROOT_STACK_SCREENS.AUTH);
  };
  return (
    <View>
      <ImageBackground
        resizeMode="stretch"
        source={{uri: Images.landingScreenBackgroundImage}}>
        <Header />
        <View style={styles.container}>
          <AppText
            text="Restaurant food, takeaway and groceries. Delivered"
            fontFamily={FontFamily.STRATOS_SEMI_BOLD}
            fontSize={38}
            color={Colors.backgroundPrimary}
          />
        </View>
        <View style={styles.container}>
          <View style={styles.card}>
            <View style={styles.cardContent}>
              <AppText
                text="Enter a postcode to see what we deliver:"
                fontFamily={FontFamily.REGULAR}
                fontSize={16}
                color={Colors.textColor}
              />
              <View style={styles.searchBar}>
                <View style={styles.searchButtonComponent}>
                  <View style={styles.sendIcon}>
                    <Svgs.Send
                      height={20}
                      width={20}
                      fill={Colors.eatMeColor}
                    />
                  </View>
                  <TextInput
                    style={styles.inputText}
                    placeholder="e.g. EC4R 3TE"
                    placeholderTextColor={Colors.placeholderTextColor}
                  />
                  <TouchableOpacity style={styles.searchButton}>
                    <View style={styles.searchButtonText}>
                      <AppText
                        text="Search"
                        fontFamily={FontFamily.BOLD}
                        fontSize={16}
                        color={Colors.backgroundPrimary}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.searchComponentText2}>
                <TouchableOpacity onPress={authLandingHandler}>
                  <AppText
                    text="Log in"
                    fontFamily={FontFamily.REGULAR}
                    color={Colors.eatMeColor}
                    fontSize={16}
                  />
                </TouchableOpacity>
                <AppText
                  text=" for your recent addresses"
                  fontSize={16}
                  fontFamily={FontFamily.REGULAR}
                  color={Colors.textColor}
                />
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SectionDetail;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  card: {
    backgroundColor: Colors.backgroundPrimary,
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: Colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  cardContent: {
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  searchBar: {
    marginTop: 10,
    marginBottom: 10,
  },
  searchButtonComponent: {
    flexDirection: 'row',
    backgroundColor: Colors.backgroundPrimary,
    borderWidth: 0.25,
    padding: 3,
    borderRadius: 50,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2,
  },
  sendIcon: {
    marginTop: 10,
    marginLeft: 10,
  },
  inputText: {
    flex: 2,
    backgroundColor: Colors.backgroundPrimary,
    height: 40,
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 15,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: FontFamily.REGULAR,
    fontSize: 16,
    color: Colors.textColor,
  },
  searchButton: {
    alignItems: 'center',
    backgroundColor: Colors.eatMeColor,
    borderRadius: 100,
  },

  searchButtonText: {
    paddingTop: 4,
    paddingHorizontal: 15,
    paddingBottom: 6,
  },
  searchComponentText2: {
    flexDirection: 'row',
  },
});
