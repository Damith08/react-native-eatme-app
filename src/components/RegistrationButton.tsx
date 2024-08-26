import {
  View,
  TouchableOpacity,
  GestureResponderEvent,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import React from 'react';
import {SvgProps} from 'react-native-svg';

type RegistrationButtonProp = {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  Icon: React.FC<SvgProps>;
  styleContainer?: StyleProp<ViewStyle>;
  styleButtonContainer?: StyleProp<ViewStyle>;
  styleButtonTextColor: StyleProp<TextStyle>;
  height: number;
  width: number;
  fill?: string;
  buttonText: string;
};

const RegistrationButton = ({
  onPress,
  Icon,
  styleContainer,
  styleButtonContainer,
  styleButtonTextColor,
  height,
  width,
  fill,
  buttonText,
}: RegistrationButtonProp) => {
  return (
    <TouchableOpacity style={styleContainer} onPress={onPress}>
      <View style={styleButtonContainer}>
        <Icon height={height} width={width} fill={fill} style={styles.icon} />
        <Text style={styleButtonTextColor}>{buttonText}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RegistrationButton;

const styles = {
  icon: {
    marginRight: 10,
  },
};
