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
import Card from '../../components/Card';
import FooterComponent from '../../components/FooterComponent';
import {Svgs} from '../../theme/Svgs';
import {useNavigation} from '@react-navigation/native';
import {ROOT_STACK_SCREENS} from '../../constants/NavigationConstants';
import DetailCard from '../../components/DetailCard';

const LandingScreen = () => {
  const navigation = useNavigation();
  const authLandingHandler = () => {
    navigation.navigate(ROOT_STACK_SCREENS.AUTH);
  };

  return (
    <ScrollView>
      <HeaderComponent />

      <View style={styles.container}>
        <Text style={styles.text}>
          Restaurant food, takeaway and groceries. Delivered
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <View style={styles.searchComponentText1}>
              <Text>Enter a postcode to see what we deliver:</Text>
            </View>
            <View style={styles.searchBar}>
              <View style={styles.searchButtonComponent}>
                <View style={styles.sendIcon}>
                  <Svgs.Send height={20} width={20} fill={'#E27A39'} />
                </View>
                <TextInput
                  style={styles.inputText}
                  placeholder="e.g. EC4R 3TE"
                  placeholderTextColor="gray"
                />
                <TouchableOpacity style={styles.searchButton}>
                  <Text style={styles.searchButtonText}>Search</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.searchComponentText2}>
              <TouchableOpacity onPress={authLandingHandler}>
                <Text style={styles.logInText}>Log in</Text>
              </TouchableOpacity>
              <Text> for your recent addresses</Text>
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
            <Text style={styles.text}>Track orders to your door</Text>
            <Text>
              Get your favourite food delivered in a flash. You'll see when your
              rider's pick up your order, and be able to follow them along the
              way. You'll get a notification when they're nearby, too.
            </Text>
            <View style={styles.svgsButtonContainer}>
              <TouchableOpacity style={styles.appStoreIcon}>
                <Svgs.AppStore height={135} width={135} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Svgs.PlayStore height={145} width={145} />
              </TouchableOpacity>
            </View>
            <Image
              height={500}
              width={322}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt85bgXe0z4wUGVk_a0-8AvNOf1fa1RVbUzg&s',
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.discountSection}>
        <View style={styles.container}>
          <Text style={styles.discountHeading}>Up to 25% off meal deals</Text>
          <Text style={styles.discountText}>
            Need a midweek pick-me-up, a break from cooking for the family or
            just fancy your favourite restaurant?
          </Text>
          <Text style={styles.discountTextSmall}>
            Subject to availability. Participating restaurant only.
            Service/delivery fees apply.T&Cs
          </Text>
        </View>
        <View>
          <Svgs.MerchItemRow height={70} width={600} />
        </View>
      </View>
      <DetailCard
        title="Partner with us"
        description="Join Deliveroo and reach more customers than ever. We handle delivery, so you can focus on the food."
        source={{
          uri: 'https://img.freepik.com/free-photo/side-view-cook-making-delicious-pasta_23-2150690631.jpg',
        }}
        onPress={() => {}}
      />
      <DetailCard
        title="Ride with us"
        description="The freedom to fit work around your life. Plus great fees, perks and discounts."
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfocaXNLEB63uQ85fjN5cuok3EX7zByhv-kvflL15GWKZfHYBkDBprzIr9pGgbp0zgFIM&usqp=CAU',
        }}
        onPress={() => {}}
      />
      <DetailCard
        title="EatMe for Work"
        description="From team lunches to meal allowances for your late night workers, we've got your workplace meals covered."
        source={{
          uri: 'https://www.roadie.com/wp-content/uploads/2024/04/HomeDelivery.jpeg',
        }}
        onPress={() => {}}
      />
      <DetailCard
        title="Gift Cards"
        description="Looking for an easy way to treat your friends and family? Give the gift of great food with a Deliveroo gift card."
        source={{
          uri: 'https://nypost.com/wp-content/uploads/sites/2/2023/11/gift-card.jpg?quality=75&strip=all&w=1024',
        }}
        onPress={() => {}}
      />
      <FooterComponent />
    </ScrollView>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    marginLeft: 25,
    marginRight: 25,
  },
  text: {
    fontSize: 38,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#333',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  cardContent: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  searchComponentText1: {
    marginTop: 10,
    marginBottom: 7,
  },
  searchComponentText2: {
    flexDirection: 'row',
    marginTop: 7,
    marginBottom: 10,
  },
  logInText: {
    color: '#E27A39',
  },
  sendIcon: {
    marginTop: 10,
    marginLeft: 10,
  },
  inputText: {
    flex: 2,
    backgroundColor: 'white',
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
    backgroundColor: '#E27A39',
    borderRadius: 100,
  },
  searchButtonComponent: {
    flexDirection: 'row',
    backgroundColor: 'white',
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
    color: 'white',
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
    backgroundColor: '#E27A39',
    marginTop: 10,
    marginBottom: 20,
  },
  discountHeading: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 53,
    margin: 10,
    justifyContent: 'center',
  },
  discountText: {
    color: 'white',
    fontSize: 20,
    alignItems: 'center',
    margin: 10,
    justifyContent: 'center',
  },
  discountTextSmall: {
    color: 'white',
    margin: 10,
    justifyContent: 'center',
  },
});
