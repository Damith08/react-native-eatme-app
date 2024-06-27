import React from 'react';
import {TextInput, StyleSheet, TextInputProps, Text} from 'react-native';
import {Colors} from '../theme/Colors';
import {View} from 'react-native-ui-lib';

type AppInputProps = {
  label: string;
  keyboardType?: TextInputProps['keyboardType'];
  secureTextEntry?: boolean;
  placeholder?: string;
  value: string;
  onBlur: () => void;
  onChange: (...event: unknown[]) => void;
  error?: string;
  maxLength?: number;
};

const AppInput: React.FC<AppInputProps> = ({
  label,
  keyboardType = 'default',
  secureTextEntry = false,
  placeholder,
  value,
  onBlur,
  onChange,
  error,
  maxLength,
}) => {
  return (
    <View>
      <Text>{label}</Text>
      <View style={[!!error && styles.errorInput]}>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          placeholder={placeholder}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          onChangeText={onChange}
          value={value}
          onBlur={onBlur}
          placeholderTextColor={Colors.placeholderTextColor}
          maxLength={maxLength}
        />
      </View>
      <Text style={styles.errorText}>{error}</Text>
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({
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
  errorInput: {
    borderWidth: 0.5,
    borderColor: Colors.error,
  },
  errorText: {
    color: Colors.error,
    marginBottom: 15,
  },
});
