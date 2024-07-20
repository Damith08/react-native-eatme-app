import {View, StyleSheet, ScrollView, ActivityIndicator} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {Colors} from '../../theme/Colors';
import AppInput from '../../components/AppInput';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store';
import {requestToRegister} from '../../store/slices/authSlice';
import {FontFamily} from '../../theme/FontFamily';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/RootStackNavigator';
import {ROOT_STACK_SCREENS} from '../../constants/NavigationConstants';
import AppPrimaryButton from '../../components/Buttons/AppPrimaryButton';
import AppText from '../../components/AppText';
import DropdownAlert, {
  DropdownAlertData,
  DropdownAlertType,
} from 'react-native-dropdownalert';
import {RegisterFormData} from '../../types/auth.types';

const schema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  username: Yup.string().required('Username is required'),
  email: Yup.string()
    .email('Email address is invalid')
    .required('Email address is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters long')
    .required('Password is required'),
  address: Yup.string().required('Address is required'),
  contact: Yup.string()
    .required('Contact Number is required')
    .min(10, 'Contact Number must be exactly 10 digits')
    .max(10, 'Contact Number must be exactly 10 digits'),
});

const RegisterLanding = (): React.JSX.Element => {
  const form = useForm<RegisterFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      address: '',
      contact: '',
    },
  });

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const dispatch = useDispatch<AppDispatch>();

  const handleOnPressMenu = form.handleSubmit(
    async (data: RegisterFormData) => {
      const response = await dispatch(requestToRegister(data));
      const alertData = await alert({
        type: DropdownAlertType.Error,
        title: 'Error',
        message: 'Something went wrong.',
      });
      if (response.meta.requestStatus === 'fulfilled') {
        navigation.navigate(ROOT_STACK_SCREENS.MENU_SCREEN);
      } else {
        alertData;
      }
    },
  );

  const {loading} = useSelector((state: RootState) => state.auth);

  let alert = (_data: DropdownAlertData) =>
    new Promise<DropdownAlertData>(res => res);

  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <View style={styles.container}>
        <View style={styles.textHeading}>
          <AppText
            text="Sign in"
            fontFamily={FontFamily.BOLD}
            fontSize={24}
            color={Colors.textColor}
          />
        </View>
        <Controller
          control={form.control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, value}, fieldState: {error}}) => (
            <AppInput
              label="First Name"
              placeholder="e.g. John"
              value={value}
              onChangeText={onChange}
              error={error?.message}
            />
          )}
          name="firstName"
        />

        <Controller
          control={form.control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, value}, fieldState: {error}}) => (
            <AppInput
              label="Last Name"
              placeholder="e.g. Doe"
              value={value}
              onChangeText={onChange}
              error={error?.message}
            />
          )}
          name="lastName"
        />

        <Controller
          control={form.control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, value}, fieldState: {error}}) => (
            <AppInput
              label="Username"
              placeholder="e.g. johndoe8"
              value={value}
              onChangeText={onChange}
              error={error?.message}
            />
          )}
          name="username"
        />

        <Controller
          control={form.control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, value}, fieldState: {error}}) => (
            <AppInput
              label="Mobile Number"
              placeholder="e.g. 0777888999"
              value={value}
              onChangeText={onChange}
              error={error?.message}
              keyboardType="number-pad"
              maxLength={10}
            />
          )}
          name="contact"
        />
        <Controller
          control={form.control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, value}, fieldState: {error}}) => (
            <AppInput
              label="Address"
              placeholder="e.g. 221B Baker Street"
              value={value}
              onChangeText={onChange}
              error={error?.message}
              keyboardType="default"
            />
          )}
          name="address"
        />
        <Controller
          control={form.control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, value}, fieldState: {error}}) => (
            <AppInput
              label="Email address"
              placeholder="e.g. johndoe@example.com"
              value={value}
              onChangeText={onChange}
              error={error?.message}
              keyboardType="email-address"
            />
          )}
          name="email"
        />

        <Controller
          control={form.control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, value}, fieldState: {error}}) => (
            <AppInput
              label="Password"
              placeholder="Type your password here"
              value={value}
              onChangeText={onChange}
              error={error?.message}
              keyboardType="default"
              secureTextEntry={true}
            />
          )}
          name="password"
        />
        {loading ? (
          <ActivityIndicator size="large" color={Colors.eatMeColor} />
        ) : (
          <AppPrimaryButton
            onPress={handleOnPressMenu}
            text="Sign in"
            fontSize={16}
            color={Colors.backgroundPrimary}
            fontFamily={FontFamily.SEMI_BOLD}
          />
        )}
      </View>
      <Footer />
      <DropdownAlert alert={func => (alert = func)} />
    </ScrollView>
  );
};

export default RegisterLanding;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Colors.backgroundPrimary,
    shadowColor: Colors.shadowColor,
    borderBottomWidth: 0.25,
  },
  container: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 30,
  },
  textHeading: {
    marginTop: 10,
    marginBottom: 10,
  },
  textInputContainer: {
    backgroundColor: Colors.backgroundPrimary,
    borderRadius: 5,
    marginTop: 8,
    marginBottom: 10,
  },
  textInput: {
    marginHorizontal: 15,
  },
  continueButton: {
    backgroundColor: Colors.eatMeColor,
    marginTop: 10,
    marginBottom: 10,
    padding: 14,
    borderRadius: 5,
    alignItems: 'center',
  },
  continueButtonText: {
    color: Colors.backgroundPrimary,
    fontSize: 15,
    fontWeight: 'bold',
  },
  errorText: {
    color: Colors.error,
    marginBottom: 15,
  },
  errorInput: {
    borderWidth: 0.75,
    borderColor: Colors.error,
  },
});
