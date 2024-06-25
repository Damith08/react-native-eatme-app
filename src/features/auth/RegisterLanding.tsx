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
import {useForm, Controller, SubmitHandler} from 'react-hook-form';
import {RegisterFormData} from '../../types/types';

const RegisterLanding = (): React.JSX.Element => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const menuScreenLandingHandler = () => {
    handleSubmit(onSubmit)();
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<RegisterFormData>({
    defaultValues: {
      firstName: '',
    },
  });
  const onSubmit: SubmitHandler<RegisterFormData> = data => {
    console.log(data);
    navigation.navigate(ROOT_STACK_SCREENS.MENU_SCREEN);
  };

  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        <HeaderComponent />
      </View>
      <View style={styles.container}>
        <Text style={styles.textHeading}>Sign in</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <>
              <Text>First Name</Text>
              <View
                style={[
                  styles.textInputContainer,
                  errors.firstName && styles.errorInput,
                ]}>
                <TextInput
                  style={styles.textInput}
                  placeholder="e.g. John"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholderTextColor="#8f949d"
                />
              </View>
            </>
          )}
          name="firstName"
        />
        {errors.firstName && (
          <Text style={styles.errorText}>First Name is required.</Text>
        )}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <>
              <Text>Surname</Text>
              <View
                style={[
                  styles.textInputContainer,
                  errors.firstName && styles.errorInput,
                ]}>
                <TextInput
                  style={styles.textInput}
                  placeholder="e.g. Doe"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholderTextColor="#8f949d"
                />
              </View>
            </>
          )}
          name="surname"
        />
        {errors.surname && (
          <Text style={styles.errorText}>Surname is required.</Text>
        )}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <>
              <Text>Location</Text>
              <View
                style={[
                  styles.textInputContainer,
                  errors.firstName && styles.errorInput,
                ]}>
                <TextInput
                  style={styles.textInput}
                  placeholder="e.g. Colombo"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholderTextColor="#8f949d"
                />
              </View>
            </>
          )}
          name="location"
        />
        {errors.location && (
          <Text style={styles.errorText}>Location is required.</Text>
        )}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <>
              <Text>Mobile Number</Text>
              <View
                style={[
                  styles.textInputContainer,
                  errors.firstName && styles.errorInput,
                ]}>
                <TextInput
                  style={styles.textInput}
                  placeholder="e.g. +94775983761"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  keyboardType="phone-pad"
                  placeholderTextColor="#8f949d"
                />
              </View>
            </>
          )}
          name="mobile"
        />
        {errors.mobile && (
          <Text style={styles.errorText}>Mobile Number is required.</Text>
        )}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <>
              <Text>Email</Text>
              <View
                style={[
                  styles.textInputContainer,
                  errors.firstName && styles.errorInput,
                ]}>
                <TextInput
                  style={styles.textInput}
                  placeholder="e.g. example@example.com"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholderTextColor="#8f949d"
                  keyboardType="email-address"
                  autoComplete="email"
                />
              </View>
            </>
          )}
          name="email"
        />
        {errors.email && (
          <Text style={styles.errorText}>Mobile Number is required.</Text>
        )}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <>
              <Text>Password</Text>
              <View
                style={[
                  styles.textInputContainer,
                  errors.firstName && styles.errorInput,
                ]}>
                <TextInput
                  style={styles.textInput}
                  placeholder="password"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholderTextColor="#8f949d"
                  textContentType="password"
                  secureTextEntry={true}
                />
              </View>
            </>
          )}
          name="password"
        />
        {errors.password && (
          <Text style={styles.errorText}>Password is required.</Text>
        )}
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
  errorText: {
    color: '#900',
    marginBottom: 15,
  },
  errorInput: {
    borderWidth: 0.75,
    borderColor: '#900',
  },
});
