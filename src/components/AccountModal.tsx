import {View, Text, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Svgs} from '../theme/Svgs';

const AccountModal = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Modal
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View>
          <View>
            <View style={styles.card}>
              <View style={styles.cardContent}>
                <View style={styles.header}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('LandingScreen')}>
                    <Svgs.Logo height={90} width={90} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text>X</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.container}>
              <TouchableOpacity
                style={styles.signupOrLoginButton}
                onPress={() => navigation.navigate('AuthLanding')}>
                <Text style={styles.buttonText}>Sign up or log in </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.optionTab}>
                <View style={styles.cardContent}>
                  <View style={styles.optionRow}>
                    <View style={styles.iconNText}>
                      <Text>i</Text>
                      <Text>Become a Rider</Text>
                    </View>
                    <View>
                      <Text>D</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionTab}>
                <View style={styles.cardContent}>
                  <View style={styles.optionRow}>
                    <View style={styles.iconNText}>
                      <Text>i</Text>
                      <Text>Add your restaurant or store</Text>
                    </View>
                    <View>
                      <Text>D</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionTab}>
                <View style={styles.cardContent}>
                  <View style={styles.optionRow}>
                    <View style={styles.iconNText}>
                      <Text>i</Text>
                      <Text>Sign up your office</Text>
                    </View>
                    <View>
                      <Text>D</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionTab}>
                <View style={styles.cardContent}>
                  <View style={styles.optionRow}>
                    <View style={styles.iconNText}>
                      <Text>i</Text>
                      <Text>FAQs</Text>
                    </View>
                    <View>
                      <Text>D</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
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
  container: {
    margin: 20,
  },
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
});
