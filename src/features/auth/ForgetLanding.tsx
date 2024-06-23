import React from 'react';
import {Text, View} from 'react-native';
import HeaderComponent from '../../components/Header';
import Footer from '../../components/Footer';

function ForgetLanding(): React.JSX.Element {
  return (
    <View>
      <View>
        <HeaderComponent />
      </View>
      <Text>Forget Password</Text>
      <Footer />
    </View>
  );
}

export default ForgetLanding;
