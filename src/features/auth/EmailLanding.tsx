import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {useNavigation} from '@react-navigation/native';
import {ROOT_STACK_SCREENS} from '../../constants/NavigationConstants';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/RootStackNavigator';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import {Colors} from '../../theme/Colors';
import AppInput from '../../components/AppInput';
import AppText from '../../components/AppText';
import {FontFamily} from '../../theme/FontFamily';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {requestToLogin} from '../../store/slices/authSlice';
import {useAppSelector} from '../../hooks/useAppSelector';
import AppPrimaryButton from '../../components/Buttons/AppPrimaryButton';
import AppSecondaryButton from '../../components/Buttons/AppSecondaryButton';
import AppTertiaryButton from '../../components/Buttons/AppTertiaryButton';

import {LoginFormData} from '../../types/auth.types';
import DropdownAlert, {
  DropdownAlertType,
  DropdownAlertData,
} from 'react-native-dropdownalert';

const schema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('Email is invalid'),
  password: Yup.string().required('Password is required'),
});

const EmailLanding = (): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const {loading} = useAppSelector(state => state.auth);

  const form = useForm<LoginFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const handleOnPressRegister = () => {
    navigation.navigate(ROOT_STACK_SCREENS.REGISTER);
  };

  const handleOnPressContinue = form.handleSubmit(
    async (data: LoginFormData) => {
      const response = await dispatch(requestToLogin(data));
      try {
        if (response.meta.requestStatus === 'fulfilled') {
          alert({
            type: DropdownAlertType.Success,
            title: 'Success',
            message: 'Login successful!',
          });
          navigation.navigate(ROOT_STACK_SCREENS.MENU_SCREEN);
        }
      } catch (error) {
        alert({
          type: DropdownAlertType.Error,
          title: 'Error',
          message: 'Something went wrong',
        });
      }
    },
  );

  const handleOnPressForgetPassword = () => {
    navigation.navigate(ROOT_STACK_SCREENS.FORGET_EMAIL);
  };

  let alert = (_data: DropdownAlertData) =>
    new Promise<DropdownAlertData>(res => res);

  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.container}>
          <View style={styles.textHeading}>
            <AppText
              text="Log in"
              fontFamily={FontFamily.BOLD}
              fontSize={24}
              color={Colors.textColor}
            />
          </View>
          <Controller
            control={form.control}
            render={({field: {onChange, value}, fieldState: {error}}) => (
              <AppInput
                label="Email address"
                placeholder="e.g. johndoe@gmail.com"
                value={value}
                onChangeText={onChange}
                error={error?.message}
              />
            )}
            name="email"
          />
          <View>
            <Controller
              control={form.control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, value}, fieldState: {error}}) => (
                <AppInput
                  placeholder="Enter your password"
                  value={value}
                  onChangeText={onChange}
                  secureTextEntry={true}
                  label="Password"
                  error={error?.message}
                />
              )}
              name="password"
            />
          </View>
          {loading ? (
            <ActivityIndicator size="large" color={Colors.eatMeColor} />
          ) : (
            <AppPrimaryButton
              onPress={handleOnPressContinue}
              loading={loading}
              disabled={!form.formState.isValid}
              text="Log in"
              fontFamily={FontFamily.SEMI_BOLD}
              fontSize={16}
              color={
                !form.formState.isValid
                  ? Colors.disableButtonTextColor
                  : Colors.backgroundPrimary
              }
            />
          )}
          <AppTertiaryButton
            onPress={handleOnPressForgetPassword}
            text="Forgot password?"
            fontFamily={FontFamily.REGULAR}
            fontSize={15}
            color={Colors.eatMeColor}
          />
          <AppSecondaryButton
            onPress={handleOnPressRegister}
            text="Register"
            fontFamily={FontFamily.SEMI_BOLD}
            fontSize={15}
            color={Colors.backgroundPrimary}
          />
        </View>
      </KeyboardAvoidingView>
      <Footer />
      <DropdownAlert alert={func => (alert = func)} />
    </ScrollView>
  );
};

export default EmailLanding;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Colors.backgroundPrimary,
    shadowColor: Colors.shadowColor,
    borderBottomWidth: 0.25,
  },
  container: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 40,
  },
  textHeading: {
    marginTop: 10,
    marginBottom: 10,
  },
  textInput: {
    marginHorizontal: 15,
  },
});
