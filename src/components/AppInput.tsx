import React from 'react';
import {TextInput, StyleSheet, TextInputProps} from 'react-native';
import {Colors} from '../theme/Colors';

type AppInputProps = {
  // label: string;
  keyboardType?: TextInputProps['keyboardType'];
  secure?: boolean;
  // onUpdateValue: (text: string) => void;
  placeholder?: string;
  value: string;
  isInvalid?: boolean;
  onBlur: () => void;
  onChange: (...event: unknown[]) => void;
};

const AppInput: React.FC<AppInputProps> = ({
  // label,
  keyboardType = 'default',
  secure = false,
  placeholder,
  value,
  isInvalid = false,
  onBlur,
  onChange,
}) => {
  return (
    <TextInput
      style={[styles.input, isInvalid && styles.inputInvalid]}
      autoCapitalize="none"
      placeholder={placeholder}
      keyboardType={keyboardType}
      secureTextEntry={secure}
      onChangeText={onChange}
      value={value}
      onBlur={onBlur}
      placeholderTextColor={Colors.placeholderTextColor}
    />
  );
};

export default AppInput;

const styles = StyleSheet.create({
  inputContainer: {
    // marginVertical: 8,
  },
  label: {
    // color: Colors.placeholderTextColor,
    // marginBottom: 4,
  },
  labelInvalid: {
    color: Colors.error500,
  },
  input: {
    paddingVertical: 11,
    paddingHorizontal: 15,
    backgroundColor: Colors.backgroundPrimary,
    borderRadius: 4,
    fontSize: 16,
  },
  inputInvalid: {
    // backgroundColor: Colors.error100,
    // paddingVertical: 8,
    // paddingHorizontal: 6,
    // borderRadius: 4,
  },
});
