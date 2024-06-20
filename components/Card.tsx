import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';

const Card = () => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text>Card</Text>
        <Text>Topic</Text>
        <Text>Description</Text>
        <Button title="Get started" />
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#333',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  cardContent: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
});
