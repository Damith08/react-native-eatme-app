import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';

const FooterComponent = () => {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.cardTextHeading}>Discover EatMe</Text>
            <FlatList
              scrollEnabled={false}
              data={[
                {
                  key: 'Investors',
                },
                {key: 'About us'},
                {key: 'Takeaway'},
                {key: 'More'},
                {key: 'Newsroom'},
                {key: 'Engineering blog'},
                {key: 'Design blog'},
                {key: 'Gift Cards'},
                {key: 'EatMe Students'},
                {key: 'Careers'},
                {key: 'Restaurant signup'},
                {key: 'Become a rider'},
              ]}
              renderItem={({item}) => (
                <TouchableOpacity>
                  <Text style={styles.cardText}>{item.key}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.cardTextHeading}>Legal</Text>
            <FlatList
              scrollEnabled={false}
              data={[
                {
                  key: 'Terms and conditions',
                },
                {key: 'Privacy'},
                {key: 'Cookies'},
                {key: 'Modern Salvery Statement'},
                {key: 'Tax Strategy'},
                {key: 'Section 172 Statement'},
                {key: 'Public Authority Requests'},
              ]}
              renderItem={({item}) => (
                <TouchableOpacity>
                  <Text style={styles.cardText}>{item.key}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.cardTextHeading}>Help</Text>
            <FlatList
              scrollEnabled={false}
              data={[
                {key: 'Contact'},
                {key: 'FAQs'},
                {key: 'Cuisines'},
                {key: 'Brands'},
              ]}
              renderItem={({item}) => (
                <TouchableOpacity>
                  <Text style={styles.cardText}>{item.key}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.cardTextHeading}>Take EatMe with you</Text>
            <FlatList
              scrollEnabled={false}
              data={[{key: 'AppleStore Button'}, {key: 'GooglePlay Button'}]}
              renderItem={({item}) => (
                <TouchableOpacity>
                  <Text style={styles.cardText}>{item.key}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
        <View style={styles.iconAndTextContainer}>
          <View style={styles.socialMediaIconsContainer}>
            <View style={styles.socialMediaIcon}>
              <TouchableOpacity>
                <Text>F</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.socialMediaIcon}>
              <TouchableOpacity>
                <Text>I</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.socialMediaIcon}>
              <TouchableOpacity>
                <Text>X</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={styles.text}>@ 2024 EatMe</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FooterComponent;

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#2e3333',
  },
  cardContainer: {
    margin: 20,
  },
  card: {
    backgroundColor: '#444444',
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
  cardTextHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  cardText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 10,
  },
  iconAndTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: '#585c5c',
  },
  socialMediaIconsContainer: {
    flexDirection: 'row',
  },
  socialMediaIcon: {
    marginRight: 10,
    backgroundColor: 'white',
  },
});
