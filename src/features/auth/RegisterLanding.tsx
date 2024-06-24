import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import HeaderComponent from '../../components/Header';
import Footer from '../../components/Footer';
import {useNavigation} from '@react-navigation/native';
import {ROOT_STACK_SCREENS} from '../../constants/NavigationConstants';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/RootStackNavigator';

const RegisterLanding = (): React.JSX.Element => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const menuScreenLandingHandler = () => {
    navigation.navigate(ROOT_STACK_SCREENS.MENU_SCREEN);
  };
  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        <HeaderComponent />
      </View>
      <View style={styles.container}>
        <Text style={styles.textHeading}>Sign in</Text>
        <Text>Full Name</Text>
        <View style={styles.textInputContainer}>
          <TextInput style={styles.textInput} placeholder="e.g. John Doe" />
        </View>
        <Text>Email</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="e.g.name@example.com"
          />
        </View>
        <Text>Password</Text>
        <View style={styles.textInputContainer}>
          <TextInput style={styles.textInput} placeholder="e.g. John Doe" />
        </View>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={menuScreenLandingHandler}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </ScrollView>
  );
};

export default RegisterLanding;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'white',
    shadowColor: '#333',
    borderBottomWidth: 0.25,
  },
  container: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 30,
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
});
