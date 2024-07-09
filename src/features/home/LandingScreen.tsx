import React from 'react';
import HeaderComponent from '../../components/Header';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Footer from '../../components/Footer';
import {Svgs} from '../../theme/Svgs';
import {useNavigation} from '@react-navigation/native';
import {ROOT_STACK_SCREENS} from '../../constants/NavigationConstants';
import DetailCard from '../../components/DetailCard';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/RootStackNavigator';
import {CardComponent} from '../../constants/CardComponent';
import {Colors} from '../../theme/Colors';
import {Images} from '../../theme/Images';
import AppText from '../../components/AppText';
import {FontFamily} from '../../theme/FontFamily';
import {FontWeight} from '../../theme/FontWeight';

const LandingScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const authLandingHandler = () => {
    navigation.navigate(ROOT_STACK_SCREENS.AUTH);
  };

  return (
    <ScrollView>
      <HeaderComponent />
      <View style={styles.container}>
        <AppText
          fontFamily={FontFamily.BOLD}
          fontSize={38}
          weight={FontWeight.bold}>
          {'Restaurant food, takeaway and groceries. Delivered'}
        </AppText>
      </View>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <AppText fontFamily={FontFamily.REGULAR} fontSize={14}>
              {'Enter a postcode to see what we deliver:'}
            </AppText>
            <View style={styles.searchBar}>
              <View style={styles.searchButtonComponent}>
                <View style={styles.sendIcon}>
                  <Svgs.Send height={20} width={20} fill={Colors.eatMeColor} />
                </View>
                <TextInput
                  style={styles.inputText}
                  placeholder="e.g. EC4R 3TE"
                  placeholderTextColor={Colors.placeholderTextColor}
                />
                <TouchableOpacity style={styles.searchButton}>
                  <Text style={styles.searchButtonText}>Search</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.searchComponentText2}>
              <TouchableOpacity onPress={authLandingHandler}>
                <AppText color={Colors.eatMeColor} fontSize={14}>
                  {'Log in'}
                </AppText>
              </TouchableOpacity>
              <AppText fontSize={14}>{' for your recent addresses'}</AppText>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <Text>Photos banner</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <AppText fontFamily={FontFamily.BOLD} fontSize={34}>
              {'Track orders to your door'}
            </AppText>
            <AppText
              fontSize={14}
              fontFamily={FontFamily.REGULAR}
              textAlign={'justify'}>
              {
                "Get your favourite food delivered in a flash. You'll see when your rider's pick up your order, and be able to follow them along the way. You'll get a notification when they're nearby, too."
              }
            </AppText>
            <View style={styles.svgsButtonContainer}>
              <TouchableOpacity style={styles.appStoreIcon}>
                <Svgs.AppStore height={60} width={135} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Svgs.PlayStore height={71} width={145} />
              </TouchableOpacity>
            </View>
          </View>
          <Image
            height={500}
            width={373}
            source={{
              uri: Images.mapImage,
            }}
            style={styles.mapImage}
          />
        </View>
      </View>
      <View style={styles.discountSection}>
        <View style={styles.container}>
          <AppText
            fontSize={35}
            textAlign={'center'}
            color={Colors.backgroundPrimary}
            fontFamily={FontFamily.SEMI_BOLD}>
            {'Up to 25% off meal deals'}
          </AppText>
          <AppText
            fontSize={16}
            fontFamily={FontFamily.REGULAR}
            textAlign={'center'}
            color={Colors.backgroundPrimary}>
            {
              'Need a midweek pick-me-up, a break from cooking for the family or just fancy your favourite restaurant?'
            }
          </AppText>
          <AppText
            fontFamily={FontFamily.REGULAR}
            textAlign={'center'}
            color={Colors.backgroundPrimary}
            fontSize={12}>
            {
              'Subject to availability. Participating restaurant only. Service/delivery fees apply.T&Cs'
            }
          </AppText>
        </View>
        <View>
          <Svgs.MerchItemRow height={85} width={500} />
        </View>
      </View>
      {CardComponent.map(item => (
        <DetailCard
          title={item.title}
          description={item.description}
          source={item.source}
          onPress={item.onPress}
          key={item.title}
        />
      ))}
      <Footer />
    </ScrollView>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  text: {
    fontSize: 38,
    fontWeight: 'bold',
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
  searchComponentText2: {
    flexDirection: 'row',
  },
  logInText: {
    color: Colors.eatMeColor,
  },
  sendIcon: {
    marginTop: 10,
    marginLeft: 10,
  },
  mapImage: {
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
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
  },
  searchButton: {
    alignItems: 'center',
    backgroundColor: Colors.eatMeColor,
    borderRadius: 100,
  },
  searchButtonComponent: {
    flexDirection: 'row',
    backgroundColor: Colors.backgroundPrimary,
    borderWidth: 0.25,
    padding: 5,
    borderRadius: 50,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2,
  },
  searchBar: {
    marginTop: 10,
    marginBottom: 10,
  },
  searchButtonText: {
    color: Colors.backgroundPrimary,
    fontSize: 16,
    fontWeight: 'bold',
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  svgsButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  appStoreIcon: {
    marginTop: 5.45,
    marginRight: 10,
  },
  discountSection: {
    backgroundColor: Colors.eatMeColor,
    marginTop: 10,
    paddingTop: 40,
    marginBottom: 20,
  },
});
