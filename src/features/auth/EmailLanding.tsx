import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import HeaderComponent from '../../components/Header';
import Footer from '../../components/Footer';
import {useNavigation} from '@react-navigation/native';
import {ROOT_STACK_SCREENS} from '../../constants/NavigationConstants';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/RootStackNavigator';

const EmailLanding = (): React.JSX.Element => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const registerLandingHandler = () => {
    navigation.navigate(ROOT_STACK_SCREENS.REGISTER);
  };
  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        <HeaderComponent />
      </View>
      <View style={styles.container}>
        <Text style={styles.textHeading}>Sign up or log in</Text>
        <Text>Email address</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="e.g.name@example.com"
          />
        </View>
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgetButton}>
          <Text style={styles.forgetButtonText}>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={registerLandingHandler}>
          <Text style={styles.continueButtonText}>Register</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </ScrollView>
  );
};

export default EmailLanding;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'white',
    shadowColor: '#333',
    borderBottomWidth: 0.25,
  },
  container: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 40,
  },
  textHeading: {
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 65,
    marginBottom: 10,
  },
  textInputContainer: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 8,
    marginBottom: 10,
  },
  textInput: {
    marginHorizontal: 15,
  },
  continueButton: {
    backgroundColor: '#E27A39',
    marginTop: 10,
    marginBottom: 10,
    padding: 14,
    borderRadius: 5,
    alignItems: 'center',
  },
  continueButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  forgetButton: {
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    padding: 14,
    borderRadius: 5,
    alignItems: 'center',
  },
  forgetButtonText: {
    color: '#E27A39',
    fontSize: 15,
  },
});
