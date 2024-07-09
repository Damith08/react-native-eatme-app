import {View, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Svgs} from '../theme/Svgs';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../navigation/RootStackNavigator';
import {ROOT_STACK_SCREENS} from '../constants/NavigationConstants';
import {Picker} from '@react-native-picker/picker';
import {
  CountriesOptions,
  LanguagesOptions,
} from '../constants/CountriesAndNumbers';
import {Colors} from '../theme/Colors';
import AppText from '../components/AppText';
import {FontFamily} from '../theme/FontFamily';

const AccountModal = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [selectedCountry, setSelectedCountry] = useState('United Kingdom');

  return (
    <>
      <Modal
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.rootContainer}>
          <View style={styles.card}>
            <View style={styles.header}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(ROOT_STACK_SCREENS.LANDING_SCREEN)
                }>
                <Svgs.Logo height={90} width={90} style={styles.logoIcon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Svgs.Close
                  height={30}
                  width={30}
                  fill={Colors.eatMeColor}
                  style={styles.closeIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.signupOrLoginButton}
              onPress={() => navigation.navigate(ROOT_STACK_SCREENS.AUTH)}>
              <AppText
                text="Sign up or log in"
                fontFamily={FontFamily.BOLD}
                fontSize={17}
                color={Colors.backgroundPrimary}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.optionTab}>
              <View style={styles.cardContent}>
                <View style={styles.optionRow}>
                  <View style={styles.iconNText}>
                    <Svgs.Bicycle height={25} width={25} style={styles.icon} />
                    <AppText
                      text="Become a Rider"
                      fontSize={14}
                      fontFamily={FontFamily.REGULAR}
                    />
                  </View>
                  <View>
                    <Svgs.Forward
                      height={20}
                      width={20}
                      fill={Colors.eatMeColor}
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionTab}>
              <View style={styles.cardContent}>
                <View style={styles.optionRow}>
                  <View style={styles.iconNText}>
                    <Svgs.Eat height={25} width={25} style={styles.icon} />
                    <AppText
                      text="Add your restaurant or store"
                      fontSize={14}
                      fontFamily={FontFamily.REGULAR}
                    />
                  </View>
                  <View>
                    <Svgs.Forward
                      height={20}
                      width={20}
                      fill={Colors.eatMeColor}
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionTab}>
              <View style={styles.cardContent}>
                <View style={styles.optionRow}>
                  <View style={styles.iconNText}>
                    <Svgs.Office height={25} width={25} style={styles.icon} />
                    <AppText
                      text="Sign up your office"
                      fontSize={14}
                      fontFamily={FontFamily.REGULAR}
                    />
                  </View>
                  <View>
                    <Svgs.Forward
                      height={20}
                      width={20}
                      fill={Colors.eatMeColor}
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionTab}>
              <View style={styles.cardContent}>
                <View style={styles.optionRow}>
                  <View style={styles.iconNText}>
                    <Svgs.QuestionMark
                      height={25}
                      width={25}
                      style={styles.icon}
                    />
                    <AppText
                      text="FAQs"
                      fontSize={14}
                      fontFamily={FontFamily.REGULAR}
                    />
                  </View>
                  <View>
                    <Svgs.Forward
                      height={20}
                      width={20}
                      fill={Colors.eatMeColor}
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedLanguage}
              onValueChange={itemValue => setSelectedLanguage(itemValue)}>
              {LanguagesOptions.map(item => (
                <Picker.Item
                  label={item.label}
                  value={item.value}
                  key={item.value}
                />
              ))}
            </Picker>
          </View>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedCountry}
              onValueChange={itemValue => setSelectedCountry(itemValue)}>
              {CountriesOptions.map(item => (
                <Picker.Item
                  label={item.label}
                  value={item.value}
                  key={item.value}
                />
              ))}
            </Picker>
          </View>
        </View>
      </Modal>
      <View style={styles.accountButton}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <View style={styles.accountIcon}>
            <Svgs.Account height={20} width={20} fill={Colors.eatMeColor} />
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default AccountModal;

const styles = StyleSheet.create({
  rootContainer: {flex: 1},
  container: {
    margin: 20,
  },
  logoIcon: {marginLeft: 20},
  closeIcon: {marginTop: 27, marginRight: 20},
  accountButton: {
    borderRadius: 2,
    marginRight: 20,
    backgroundColor: Colors.backgroundPrimary,
    borderWidth: 0.25,
    borderColor: 'grey',
  },
  accountIcon: {
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: Colors.backgroundPrimary,
    marginBottom: 10,
    shadowColor: Colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  cardContent: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  signupOrLoginButton: {
    backgroundColor: Colors.eatMeColor,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: Colors.backgroundPrimary,
    fontWeight: '900',
    fontSize: 18,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
  },
  iconNText: {
    flexDirection: 'row',
  },
  optionTab: {
    backgroundColor: Colors.backgroundPrimary,
    padding: 5,
    shadowColor: Colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  icon: {marginRight: 10},
  pickerContainer: {
    marginBottom: 10,
    padding: 2,
    borderWidth: 0.25,
    borderRadius: 2,
  },
});
