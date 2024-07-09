import {StyleSheet, Text, TextProps} from 'react-native';
import React from 'react';
import {FontWeight} from '../theme/FontWeight';
import {View} from 'react-native-ui-lib';

type AppTextProps = TextProps & {
  weight?: FontWeight;
  fontSize?: number;
  fontFamily?: string;
  color?: string;
  textAlign?: 'justify' | 'center';
};

const AppText = ({
  fontFamily,
  color,
  weight,
  fontSize,
  textAlign,
  ...props
}: AppTextProps) => {
  return (
    <View style={styles.rootContainer}>
      <Text
        style={{
          fontSize: fontSize,
          fontWeight: weight,
          fontFamily: fontFamily,
          color: color,
          textAlign: textAlign,
        }}>
        {props.children}
      </Text>
    </View>
  );
};

export default AppText;

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 3,
    marginBottom: 3,
  },
});
