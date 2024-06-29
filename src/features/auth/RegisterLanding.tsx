import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import HeaderComponent from '../../components/Header';
import Footer from '../../components/Footer';
import {useNavigation} from '@react-navigation/native';
import {ROOT_STACK_SCREENS} from '../../constants/NavigationConstants';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/RootStackNavigator';
import {useForm, Controller, SubmitHandler} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {RegisterFormData} from '../../types/types';
import {Colors} from '../../theme/Colors';
import AppInput from '../../components/AppInput';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store/store';
import {registerUser} from '../../store/slices/registerSlice';

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
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const dispatch = useDispatch<AppDispatch>();

  const menuScreenLandingHandler = () => {
    handleSubmit(onSubmit)();
  };

  const {control, handleSubmit} = useForm<RegisterFormData>({
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

  const {loading, fail} = useSelector((state: RootState) => state.register);
  const onSubmit: SubmitHandler<RegisterFormData> = async data => {
    await dispatch(registerUser(data));
    console.log(data);
    if (!fail) {
      navigation.navigate(ROOT_STACK_SCREENS.MENU_SCREEN);
    }
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
          render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
            <AppInput
              label="First Name"
              placeholder="e.g. John"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              error={error?.message}
            />
          )}
          name="firstName"
        />

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
            <AppInput
              label="Last Name"
              placeholder="e.g. Doe"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              error={error?.message}
            />
          )}
          name="lastName"
        />

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
            <AppInput
              label="username"
              placeholder="e.g. johndoe8"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              error={error?.message}
            />
          )}
          name="username"
        />

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
            <AppInput
              label="Mobile Number"
              placeholder="e.g. 0777888999"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              error={error?.message}
              keyboardType="number-pad"
              maxLength={10}
            />
          )}
          name="contact"
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
            <AppInput
              label="Address"
              placeholder="e.g. 221B Baker Street"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              error={error?.message}
              keyboardType="default"
            />
          )}
          name="address"
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
            <AppInput
              label="Email address"
              placeholder="e.g. johndoe@example.com"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              error={error?.message}
              keyboardType="email-address"
            />
          )}
          name="email"
        />

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
            <AppInput
              label="Password"
              placeholder="add your password here"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              error={error?.message}
              keyboardType="default"
              secureTextEntry={true}
            />
          )}
          name="password"
        />
        <TouchableOpacity
          style={styles.continueButton}
          onPress={menuScreenLandingHandler}>
          {loading ? (
            <ActivityIndicator size="small" color={Colors.backgroundPrimary} />
          ) : (
            <Text style={styles.continueButtonText}>Continue</Text>
          )}
        </TouchableOpacity>
      </View>
      <Footer />
    </ScrollView>
  );
};

export default RegisterLanding;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Colors.backgroundPrimary,
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
