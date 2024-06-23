import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HeaderComponent from '../../components/Header';
import Footer from '../../components/Footer';
import {useNavigation} from '@react-navigation/native';
import {Svgs} from '../../theme/Svgs';
import {ROOT_STACK_SCREENS} from '../../constants/NavigationConstants';

function AuthLanding(): React.JSX.Element {
  const navigation = useNavigation();

  const emailLandingHandler = () => {
    navigation.navigate(ROOT_STACK_SCREENS.EMAIL);
  };

  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        <HeaderComponent />
      </View>
      <View style={styles.container}>
        <Text style={styles.textHeading}>Sign up or log in</Text>
        <TouchableOpacity style={styles.facebookButton}>
          <View style={styles.buttonContainer}>
            <Svgs.Facebook
              height={25}
              width={25}
              fill={'white'}
              style={styles.icon}
            />
            <Text style={styles.whiteColoredButtonText}>
              Continue with Facebook
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.googleButton}>
          <View style={styles.buttonContainer}>
            <Svgs.Gmail height={20} width={20} style={styles.icon} />
            <Text style={styles.blackColoredButtonText}>
              Continue with Google
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.appleButton}>
          <View style={styles.buttonContainer}>
            <Svgs.Apple height={20} width={20} style={styles.icon} />
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
          onPress={emailLandingHandler}>
          <View style={styles.buttonContainer}>
            <Svgs.Email height={22} width={22} style={styles.icon} />
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
      <Footer />
    </ScrollView>
  );
}

export default AuthLanding;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'white',
    shadowColor: '#333',
    borderBottomWidth: 0.25,
  },
  container: {
    marginLeft: 20,
    marginRight: 20,
  },
  textHeading: {
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 65,
    marginBottom: 10,
  },
  facebookButton: {
    backgroundColor: '#4c69ba',
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
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
