import {View, Text} from 'react-native';
import React from 'react';
import HeaderComponent from '../../components/Header';
import FooterComponent from '../../components/FooterComponent';

const RegisterLanding = (): React.JSX.Element => {
  return (
    <View>
      <View>
        <HeaderComponent />
      </View>
      <Text>RegisterLanding</Text>
      <FooterComponent />
    </View>
  );
};

export default RegisterLanding;
