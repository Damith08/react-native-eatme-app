import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../theme/Colors';
import AddButton from './AddButton';

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
  return (
    <TouchableOpacity
      style={styles.rootContainer}
      onPress={handleOnPressSelectDish}>
      <View style={styles.card}>
        <Image
          height={110}
          width={110}
          source={{
            uri: dishImage,
          }}
        />
        <View style={styles.cardContent}>
          <Text style={styles.dishName}>{name}</Text>
          <View style={styles.dishDescriptionContainer}>
            <Text>{kcal}</Text>
            <Text>{price}</Text>
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
    maxWidth: 110,
    maxHeight: 300,
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
