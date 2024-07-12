import React from 'react';
import {TextInput, StyleSheet, TextInputProps} from 'react-native';
import {Colors} from '../theme/Colors';
import {View} from 'react-native-ui-lib';
import AppText from './AppText';
import {FontFamily} from '../theme/FontFamily';

type AppInputProps = {
  label: string;
  keyboardType?: TextInputProps['keyboardType'];
  secureTextEntry?: boolean;
  placeholder?: string;
  value: string;
  onChangeText: (...event: unknown[]) => void;
  error?: string;
  maxLength?: number;
};

const AppInput: React.FC<AppInputProps> = ({
  label,
  keyboardType = 'default',
  secureTextEntry = false,
  placeholder,
  value,
  onChangeText,
  error,
  maxLength,
}) => {
  return (
    <View>
      <AppText text={label} fontFamily={FontFamily.REGULAR} fontSize={14} />
      <View style={[!!error && styles.errorInput]}>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          placeholder={placeholder}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          value={value}
          placeholderTextColor={Colors.placeholderTextColor}
          maxLength={maxLength}
        />
      </View>
      <AppText
        text={error}
        fontFamily={FontFamily.REGULAR}
        fontSize={14}
        color={Colors.error}
      />
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  labelInvalid: {
    color: Colors.error,
  },
  input: {
    paddingVertical: 11,
    paddingHorizontal: 15,
    backgroundColor: Colors.backgroundPrimary,
    borderRadius: 4,
    fontSize: 16,
    fontFamily: FontFamily.REGULAR,
  },
  errorInput: {
    borderWidth: 0.5,
    borderColor: Colors.error,
  },
});
