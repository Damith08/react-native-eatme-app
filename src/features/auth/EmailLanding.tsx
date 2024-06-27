import {
  View,
  Text,
  StyleSheet,
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
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {LoginFormData} from '../../types/types';
import {Colors} from '../../theme/Colors';
import AppInput from '../../components/AppInput';

const schema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('Email is invalid'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
});

const EmailLanding = (): React.JSX.Element => {
  const {
    control,
    handleSubmit,
    formState: {isValid},
  } = useForm<LoginFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<LoginFormData> = data => {
    console.log(data);
    navigation.navigate(ROOT_STACK_SCREENS.MENU_SCREEN);
  };

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const handleOnPressRegister = () => {
    navigation.navigate(ROOT_STACK_SCREENS.REGISTER);
  };

  const handleOnPressContinue = () => {
    handleSubmit(onSubmit)();
  };

  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        <HeaderComponent />
      </View>
      <View style={styles.container}>
        <Text style={styles.textHeading}>Sign up or log in</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
            <AppInput
              label="Email address"
              placeholder="e.g. johndoe@gmail.com"
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              error={error?.message}
            />
          )}
          name="email"
        />
        <View>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({
              field: {onChange, onBlur, value},
              fieldState: {error},
            }) => (
              <AppInput
                placeholder="enter your password"
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                secureTextEntry={true}
                label="Password"
                error={error?.message}
              />
            )}
            name="password"
          />
        </View>
        <TouchableOpacity
          style={[styles.continueButton, !isValid && styles.disabledButton]}
          disabled={!isValid}
          onPress={handleOnPressContinue}>
          <Text
            style={[
              styles.continueButtonText,
              !isValid && styles.disabledButtonText,
            ]}>
            Continue
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgetButton}>
          <Text style={styles.forgetButtonText}>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={handleOnPressRegister}>
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
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 65,
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
  forgetButton: {
    backgroundColor: Colors.backgroundPrimary,
    marginTop: 10,
    marginBottom: 10,
    padding: 14,
    borderRadius: 5,
    alignItems: 'center',
  },
  forgetButtonText: {
    color: Colors.eatMeColor,
    fontSize: 15,
  },

  disabledButton: {
    backgroundColor: Colors.disableButtonColor,
  },
  disabledButtonText: {
    color: Colors.disableButtonTextColor,
  },
});
