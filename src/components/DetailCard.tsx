import {
  View,
  TouchableOpacity,
  Image,
  GestureResponderEvent,
  ImageSourcePropType,
  StyleSheet,
} from 'react-native';
import React from 'react';
import AppText from './AppText';
import {FontFamily} from '../theme/FontFamily';
import {Colors} from '../theme/Colors';

type DetailCardProps = {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  title: string;
  description: string;
  source: ImageSourcePropType | undefined;
};

const DetailCard = ({onPress, title, description, source}: DetailCardProps) => {
  return (
    <View style={styles.detailCardContainer}>
      <Image source={source} style={styles.image} />
      <View style={styles.headingTextContainer}>
        <AppText fontSize={25} fontFamily={FontFamily.SEMI_BOLD} text={title} />
      </View>
      <View style={styles.descriptionContainer}>
        <AppText text={description} fontSize={15} textAlign="justify" />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <AppText
            text="Get started"
            fontSize={17}
            fontFamily={FontFamily.BOLD}
            color={Colors.backgroundPrimary}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailCard;

const styles = StyleSheet.create({
  detailCardContainer: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 25,
    marginRight: 25,
  },
  image: {
    borderRadius: 10,
    height: 250,
    width: 360,
    marginBottom: 10,
  },
  headingTextContainer: {
    marginTop: 15,
    marginBottom: 10,
  },
  headingText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  descriptionContainer: {
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 25,
    backgroundColor: '#E27A39',
    borderRadius: 3,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'white',
  },
});
