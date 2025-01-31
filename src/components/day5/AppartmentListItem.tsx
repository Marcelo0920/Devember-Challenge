import { View, Text, StyleSheet, Image, ViewStyle } from "react-native";
import React from "react";
import apartments from "@assets/data/day5/apartments.json";

type AppartmentListItem = {
  apartment: (typeof apartments)[0];
  containerStyle?: ViewStyle;
};

export default function AppartmentListItem({
  apartment,
  containerStyle,
}: AppartmentListItem) {
  return (
    <View style={[styles.card, containerStyle]}>
      <Image source={{ uri: apartment.image }} style={styles.image} />
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{apartment.title}</Text>
        <Text style={styles.description}>
          {apartment.description} Stay at this apartment for
        </Text>
        <View style={styles.footer}>
          <Text style={styles.price}>$ {apartment.price} night</Text>
          <Text style={styles.price}>
            {" "}
            ★ {apartment.rating} ({apartment.numberOfStars})
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",

    margin: 10,

    flexDirection: "row",
    borderRadius: 20,
    overflow: "hidden",
  },
  rightContainer: {
    padding: 10,
    flex: 1,
  },

  description: {
    color: "gray",
  },
  title: {
    fontFamily: "InterBold",
    marginBottom: 10,
    fontSize: 16,
  },
  price: {
    fontFamily: "InterBold",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "auto",
  },
  image: {
    width: 150,
    aspectRatio: 1,
  },
});
