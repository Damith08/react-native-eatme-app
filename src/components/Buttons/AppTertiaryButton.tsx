import {
  View,
  TouchableOpacity,
  GestureResponderEvent,
  StyleSheet,
} from 'react-native';
import React from 'react';
import AppText from '../AppText';
import {Colors} from '../../theme/Colors';

type AppTertiaryButtonProps = {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  loading?: boolean;
  disabled?: boolean;
  fontSize?: number;
  fontFamily?: string;
  color?: string;
  textAlign?: 'justify' | 'center';
  text?: string;
};

const AppTertiaryButton = (
  props: AppTertiaryButtonProps,
): React.JSX.Element => {
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
        style={styles.button}>
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

export default AppTertiaryButton;

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    marginBottom: 10,
    padding: 14,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: Colors.backgroundPrimary,
  },
});
