import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import HeaderComponent from '../../components/Header';
import FooterComponent from '../../components/FooterComponent';
import {useNavigation} from '@react-navigation/native';

function AuthLanding(): React.JSX.Element {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.headerContainer}>
        <View style={styles.cardContent}>
          <HeaderComponent />
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.textHeading}>Sign up or log in</Text>
        <TouchableOpacity style={styles.facebookButton}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonIcon}>Fb</Text>
            <Text style={styles.whiteColoredButtonText}>
              Continue with Facebook
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.googleButton}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonIcon}>G</Text>
            <Text style={styles.blackColoredButtonText}>
              Continue with Google
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.appleButton}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonIcon}>App</Text>
            <Text style={styles.whiteColoredButtonText}>
              Continue with Apple
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.orTextContainer}>
          <Text>or</Text>
        </View>
        <TouchableOpacity
          style={styles.emailButton}
          onPress={() => navigation.navigate('EmailLanding')}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonIcon}>App</Text>
            <Text style={styles.whiteColoredButtonText}>
              Continue with Email
            </Text>
          </View>
        </TouchableOpacity>
        <View>
          <Text style={styles.textContainer}>
            By continuing you agree to our T&Cs. Please also check out our
            Privacy Policy. We use your data to offer you a personalised
            experience and to better understand and improve our services. For
            more information see here.
          </Text>
        </View>
      </View>
      <FooterComponent />
    </>
  );
}

export default AuthLanding;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'white',
    paddingTop: 15,
    paddingBottom: 15,
    marginBottom: 10,
    shadowColor: '#333',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },

    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,

    // elevation: 5,
  },
  cardContent: {
    // marginHorizontal: 10,
    // marginVertical: 10,
  },
  container: {
    marginLeft: 20,
    marginRight: 20,
  },
  textHeading: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10,
  },
  facebookButton: {
    backgroundColor: '#4c69ba',
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 15,
  },

  buttonIcon: {
    marginRight: 10,
    color: 'white',
  },
  whiteColoredButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  googleButton: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 0.25,
  },
  blackColoredButtonText: {
    color: '#000000e6',
    fontWeight: 'bold',
    fontSize: 16,
  },
  appleButton: {
    backgroundColor: '#000000e6',
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  orTextContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
  },

  emailButton: {
    backgroundColor: '#E27A39',
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 15,
  },
  textContainer: {
    textAlign: 'justify',
    marginBottom: 30,
  },
});
