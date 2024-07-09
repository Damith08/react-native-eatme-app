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
import {Controller, useForm} from 'react-hook-form';
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

  const handleOnPressContinue = form.handleSubmit((data: LoginFormData) => {
    console.log(data);
  });

  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        <HeaderComponent />
      </View>
      <View style={styles.container}>
        <Text style={styles.textHeading}>Sign up or log in</Text>
        <Controller
          control={form.control}
          rules={{
            required: true,
          }}
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
        <TouchableOpacity
          style={[
            styles.continueButton,
            !form.formState.isValid && styles.disabledButton,
          ]}
          disabled={!form.formState.isValid}
          onPress={handleOnPressContinue}>
          <Text
            style={[
              styles.continueButtonText,
              !form.formState.isValid && styles.disabledButtonText,
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
