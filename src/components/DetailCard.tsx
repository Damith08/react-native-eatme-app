import {
  View,
  Text,
  TouchableOpacity,
  Image,
  GestureResponderEvent,
  ImageSourcePropType,
  StyleSheet,
} from 'react-native';
import React from 'react';

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
        <Text style={styles.headingText}>{title}</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>{description}</Text>
      </View>
      <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Get started</Text>
      </TouchableOpacity>
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
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    backgroundColor: '#E27A39',
    fontWeight: 'bold',
    fontSize: 17,
    color: 'white',
    padding: 18,
    flexWrap: 'nowrap',
    borderRadius: 10,
  },
});
