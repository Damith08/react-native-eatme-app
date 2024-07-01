import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import HeaderComponent from '../../components/Header';
import Footer from '../../components/Footer';
import {useNavigation} from '@react-navigation/native';
import {Svgs} from '../../theme/Svgs';
import {ROOT_STACK_SCREENS} from '../../constants/NavigationConstants';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/RootStackNavigator';
import RegistrationButton from '../../components/RegistrationButton';
import {Colors} from '../../theme/Colors';

function AuthLanding(): React.JSX.Element {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const handleOnPressClickEmail = () => {
    navigation.navigate(ROOT_STACK_SCREENS.EMAIL);
  };

  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        <HeaderComponent />
      </View>
      <View style={styles.container}>
        <Text style={styles.textHeading}>Sign up or log in</Text>
        <RegistrationButton
          onPress={() => {}}
          Icon={Svgs.Facebook}
          height={25}
          width={25}
          fill="white"
          buttonText="Continue with Facebook"
          styleContainer={styles.facebookButton}
          styleButtonContainer={styles.buttonContainer}
          styleButtonTextColor={styles.whiteColoredButtonText}
        />
        <RegistrationButton
          onPress={() => {}}
          Icon={Svgs.Gmail}
          height={20}
          width={20}
          buttonText="Continue with Google"
          styleContainer={styles.googleButton}
          styleButtonContainer={styles.buttonContainer}
          styleButtonTextColor={styles.blackColoredButtonText}
        />
        <RegistrationButton
          onPress={() => {}}
          Icon={Svgs.Apple}
          height={22}
          width={22}
          buttonText="Continue with Apple"
          styleContainer={styles.appleButton}
          styleButtonContainer={styles.buttonContainer}
          styleButtonTextColor={styles.whiteColoredButtonText}
        />
        <View style={styles.orTextContainer}>
          <Text>or</Text>
        </View>
        <RegistrationButton
          onPress={handleOnPressClickEmail}
          Icon={Svgs.Email}
          height={22}
          width={22}
          buttonText="Continue with Google"
          styleContainer={styles.emailButton}
          styleButtonContainer={styles.buttonContainer}
          styleButtonTextColor={styles.whiteColoredButtonText}
        />
        <View>
          <Text style={styles.textContainer}>
            By continuing you agree to our T&Cs. Please also check out our
            Privacy Policy. We use your data to offer you a personalized
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
    backgroundColor: Colors.backgroundPrimary,
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
    color: Colors.backgroundPrimary,
  },
  whiteColoredButtonText: {
    color: Colors.backgroundPrimary,
    fontWeight: 'bold',
    fontSize: 16,
  },
  googleButton: {
    backgroundColor: Colors.backgroundPrimary,
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
    backgroundColor: Colors.eatMeColor,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 15,
  },
  textContainer: {
    textAlign: 'justify',
    marginBottom: 30,
  },
});
