import {View, Text, StyleSheet, TouchableOpacity, Modal} from 'react-native';
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
                  fill={'#E27A39'}
                  style={styles.closeIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.signupOrLoginButton}
              onPress={() => navigation.navigate(ROOT_STACK_SCREENS.AUTH)}>
              <Text style={styles.buttonText}>Sign up or log in </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.optionTab}>
              <View style={styles.cardContent}>
                <View style={styles.optionRow}>
                  <View style={styles.iconNText}>
                    <Svgs.Bicycle height={25} width={25} style={styles.icon} />
                    <Text>Become a Rider</Text>
                  </View>
                  <View>
                    <Svgs.Forward height={20} width={20} fill={'#E27A39'} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionTab}>
              <View style={styles.cardContent}>
                <View style={styles.optionRow}>
                  <View style={styles.iconNText}>
                    <Svgs.Eat height={25} width={25} style={styles.icon} />
                    <Text>Add your restaurant or store</Text>
                  </View>
                  <View>
                    <Svgs.Forward height={20} width={20} fill={'#E27A39'} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionTab}>
              <View style={styles.cardContent}>
                <View style={styles.optionRow}>
                  <View style={styles.iconNText}>
                    <Svgs.Office height={25} width={25} style={styles.icon} />
                    <Text>Sign up your office</Text>
                  </View>
                  <View>
                    <Svgs.Forward height={20} width={20} fill={'#E27A39'} />
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
                    <Text>FAQs</Text>
                  </View>
                  <View>
                    <Svgs.Forward height={20} width={20} fill={'#E27A39'} />
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
            <Svgs.Account height={20} width={20} fill={'#E27A39'} />
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
    backgroundColor: 'white',
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
    backgroundColor: 'white',
    marginBottom: 10,
    shadowColor: '#333',
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
    backgroundColor: '#E27A39',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
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
    backgroundColor: 'white',
    padding: 5,
    shadowColor: '#333',
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
