import {View, Text} from 'react-native';
import React from 'react';
import HeaderComponent from '../../components/Header';
import FooterComponent from '../../components/FooterComponent';

const EmailLanding = (): React.JSX.Element => {
  return (
    <View>
      <View>
        <HeaderComponent />
      </View>
      <Text>EmailLanding</Text>
      <FooterComponent />
    </View>
  );
};

export default EmailLanding;
