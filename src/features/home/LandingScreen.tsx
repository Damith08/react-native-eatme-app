import React from 'react';

import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Footer from '../../components/Footer';
import {Svgs} from '../../theme/Svgs';
import DetailCard from '../../components/DetailCard';
import {CardComponent} from '../../constants/CardComponent';
import {Colors} from '../../theme/Colors';
import {Images} from '../../theme/Images';
import AppText from '../../components/AppText';
import {FontFamily} from '../../theme/FontFamily';
import SectionDetail from '../../components/SectionDetail';

const LandingScreen = () => {
  return (
    <ScrollView>
      <SectionDetail />

      <View style={styles.partnersImageContainer}>
        <Image source={{uri: Images.partnersImages}} height={200} width={500} />
      </View>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <AppText
              text="Track orders to your door"
              fontFamily={FontFamily.BOLD}
              fontSize={34}
              color={Colors.textColor}
            />
            <AppText
              text="Get your favourite food delivered in a flash. You'll see when your rider's pick up your order, and be able to follow them along the way. You'll get a notification when they're nearby, too."
              fontSize={16}
              fontFamily={FontFamily.REGULAR}
              textAlign={'justify'}
              color={Colors.textColor}
            />
            <View style={styles.svgsButtonContainer}>
              <TouchableOpacity style={styles.appStoreIcon}>
                <Svgs.AppStore height={60} width={135} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Svgs.PlayStore height={71} width={145} />
              </TouchableOpacity>
            </View>
          </View>
          <ImageBackground
            resizeMode="cover"
            source={{uri: Images.mapImage}}
            style={styles.backgroundMapImage}>
            <Image
              source={{uri: Images.notificationImage}}
              height={110}
              width={300}
            />
          </ImageBackground>
        </View>
      </View>
      <View style={styles.discountSection}>
        <View style={styles.container}>
          <AppText
            text="Up to 25% off meal deals"
            fontSize={35}
            textAlign={'center'}
            color={Colors.backgroundPrimary}
            fontFamily={FontFamily.SEMI_BOLD}
          />
          <AppText
            text="Need a midweek pick-me-up, a break from cooking for the family or just fancy your favourite restaurant?"
            fontSize={16}
            fontFamily={FontFamily.REGULAR}
            textAlign={'center'}
            color={Colors.backgroundPrimary}
          />
          <AppText
            fontFamily={FontFamily.REGULAR}
            textAlign={'center'}
            color={Colors.backgroundPrimary}
            fontSize={12}
            text="Subject to availability. Participating restaurant only. Service/delivery fees apply.T&Cs"
          />
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
  partnersImageContainer: {
    marginBottom: 20,
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

  logInText: {
    color: Colors.eatMeColor,
  },

  mapImage: {
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },

  svgsButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  appStoreIcon: {
    marginTop: 5.45,
    marginRight: 10,
  },
  backgroundMapImage: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 450,
  },
  discountSection: {
    backgroundColor: Colors.eatMeColor,
    marginTop: 10,
    paddingTop: 40,
    marginBottom: 20,
  },
});
