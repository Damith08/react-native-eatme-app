import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React from 'react';
import HeaderComponent from '../../components/Header';
import Footer from '../../components/Footer';
import {useNavigation} from '@react-navigation/native';
import {ROOT_STACK_SCREENS} from '../../constants/NavigationConstants';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/RootStackNavigator';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {LoginFormData} from '../../types/types';
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
      if (response.meta.requestStatus === 'fulfilled') {
        navigation.navigate(ROOT_STACK_SCREENS.MENU_SCREEN);
      }
    },
  );

  const handleOnPressForgetPassword = () => {
    navigation.navigate(ROOT_STACK_SCREENS.FORGET_EMAIL);
  };

  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        <HeaderComponent />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.container}>
          <View style={styles.textHeading}>
            <AppText
              text="Log in"
              fontFamily={FontFamily.STRATOS_BOLD}
              fontSize={24}
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
          <AppPrimaryButton
            onPress={handleOnPressContinue}
            loading={loading}
            disabled={!form.formState.isValid}
            text="Login"
            fontFamily={FontFamily.SEMI_BOLD}
            fontSize={15}
            color={
              !form.formState.isValid
                ? Colors.disableButtonTextColor
                : Colors.backgroundPrimary
            }
          />
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
    </ScrollView>
  );
};

export default EmailLanding;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Colors.backgroundPrimary,
    shadowColor: '#333',
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
  forgetButton: {
    backgroundColor: Colors.backgroundPrimary,
    marginTop: 10,
    marginBottom: 10,
    padding: 14,
    borderRadius: 5,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: Colors.disableButtonColor,
  },
  disabledButtonText: {
    color: Colors.disableButtonTextColor,
  },
});
