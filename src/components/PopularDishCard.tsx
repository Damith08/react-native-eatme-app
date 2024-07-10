import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../theme/Colors';
import AddButton from './AddButton';
import AppText from './AppText';
import {FontFamily} from '../theme/FontFamily';

type PopularDishCardProps = {
  dishImage: string;
  name: string;
  kcal: string;
  price: string;
};

const PopularDishCard = ({
  dishImage,
  name,
  kcal,
  price,
}: PopularDishCardProps) => {
  const handleOnPressSelectDish = () => {};

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <TouchableOpacity
      style={styles.rootContainer}
      onPress={handleOnPressSelectDish}>
      <View style={styles.card}>
        <Image
          height={140}
          width={140}
          source={{
            uri: dishImage,
          }}
        />
        <View style={styles.cardContent}>
          <AppText
            text={truncateText(name, 25)}
            fontFamily={FontFamily.BOLD}
            fontSize={16}
          />
          <View style={styles.dishDescriptionContainer}>
            <AppText
              text={kcal}
              fontFamily={FontFamily.REGULAR}
              fontSize={14}
            />
            <AppText
              text={price}
              fontFamily={FontFamily.REGULAR}
              fontSize={14}
            />
          </View>
          <View>
            <AddButton />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PopularDishCard;

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 10,
    marginBottom: 10,
    marginRight: 20,
    maxWidth: 140,
  },
  card: {
    backgroundColor: Colors.backgroundPrimary,
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: Colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  cardContent: {
    marginTop: 6,
    marginLeft: 7,
    marginRight: 7,
    marginBottom: 5,
  },
  dishName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dishDescriptionContainer: {
    marginTop: 2,
  },
});
