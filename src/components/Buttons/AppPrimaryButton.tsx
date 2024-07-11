import {
  View,
  TouchableOpacity,
  GestureResponderEvent,
  StyleSheet,
} from 'react-native';
import React from 'react';
import AppText from '../AppText';
import {Colors} from '../../theme/Colors';

type AppPrimaryButtonProps = {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  loading?: boolean;
  disabled?: boolean;
  fontSize?: number;
  fontFamily?: string;
  color?: string;
  textAlign?: 'justify' | 'center';
  text?: string;
};

const AppPrimaryButton = (props: AppPrimaryButtonProps): React.JSX.Element => {
  const {
    onPress,
    loading = false,
    disabled = false,
    fontSize,
    fontFamily,
    color,
    textAlign,
    text,
  } = props;
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        disabled={loading || disabled}
        style={[styles.button, (disabled || loading) && styles.disabledButton]}>
        <AppText
          fontSize={fontSize}
          fontFamily={fontFamily}
          color={color}
          textAlign={textAlign}
          text={text}
        />
      </TouchableOpacity>
    </View>
  );
};

export default AppPrimaryButton;

const styles = StyleSheet.create({
  disabledButton: {
    marginTop: 10,
    marginBottom: 10,
    padding: 14,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: Colors.disableButtonColor,
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
    padding: 14,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: Colors.eatMeColor,
  },
});
