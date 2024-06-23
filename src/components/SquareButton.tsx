import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SvgProps} from 'react-native-svg';

type SquareButtonProps = {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  Icon: React.FC<SvgProps>;
};

const SquareButton = ({onPress, Icon}: SquareButtonProps) => {
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.icon}>
          <Icon height={20} width={20} fill={'#E27A39'} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SquareButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 2,
    marginRight: 20,
    backgroundColor: 'white',
  },
  icon: {
    padding: 10,
  },
});
