import React from 'react';
import {Text, View} from 'react-native';
import HeaderComponent from '../../components/Header';
import FooterComponent from '../../components/FooterComponent';

function ForgetLanding(): React.JSX.Element {
  return (
    <View>
      <View>
        <HeaderComponent />
      </View>
      <Text>Forget Password</Text>
      <FooterComponent />
    </View>
  );
}

export default ForgetLanding;
