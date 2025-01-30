import { View, Text } from "react-native";
import React from "react";
import { Marker } from "react-native-maps";

export default function CustomMarkerComponent({ apartment }) {
  return (
    <Marker
      coordinate={{
        latitude: apartment.latitude,
        longitude: apartment.longitude,
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          padding: 5,
          borderWidth: 1,
          borderColor: "gray",
          borderRadius: 20,
          paddingHorizontal: 15,
        }}
      >
        <Text style={{ fontFamily: "InterBold" }}>{apartment.price}</Text>
      </View>
    </Marker>
  );
}
