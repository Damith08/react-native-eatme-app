import React from 'react';
import HeaderComponent from '../../components/Header';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Card from '../../components/Card';
import FooterComponent from '../../components/FooterComponent';

const LandingScreen = () => {
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
            <Text>Enter a postcode to see what we deliver:</Text>
            <View style={styles.searchBar}>
              <TextInput
                style={styles.inputText}
                placeholder="e.g. EC4R 3TE"
                placeholderTextColor="gray"
              />
              <TouchableOpacity style={styles.searchButton}>
                <Text style={styles.searchButtonText}>Search</Text>
              </TouchableOpacity>
            </View>
            <Text>Log in for your recent addresses</Text>
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
      </View>
      <View style={styles.container}>
        <Card />
        <Card />
        <Card />
        <Card />
      </View>
      <FooterComponent />
    </ScrollView>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    margin: 20,
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
  inputText: {
    flex: 2,
    backgroundColor: 'white',
    height: 40,
    // margin: 12,
    // padding: 10,
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 15,
    borderRadius: 20,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchButton: {
    alignItems: 'center',
    backgroundColor: '#E27A39',
    borderRadius: 100,
  },
  searchBar: {
    flexDirection: 'row',
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
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
  discountSection: {
    backgroundColor: '#E27A39',
  },
  discountHeading: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
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
