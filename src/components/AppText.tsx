import {Text, TextProps} from 'react-native';
import React from 'react';
import {FontWeight} from '../theme/FontWeight';

type AppTextProps = TextProps & {
  weight?: FontWeight;
  fontSize?: number;
  fontFamily?: string;
  color?: string;
};

const AppText = ({
  fontFamily,
  color,
  weight,
  fontSize,
  ...props
}: AppTextProps) => {
  return (
    <Text
      style={{
        fontSize: fontSize,
        fontWeight: weight,
        fontFamily: fontFamily,
        color: color,
      }}>
      {props.children}
    </Text>
  );
};

export default AppText;
