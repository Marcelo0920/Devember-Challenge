import { View, Text, StyleSheet } from "react-native";
import React from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Stack } from "expo-router";

import apartments from "@assets/data/day5/apartments.json";
import CustomMarkerComponent from "@/components/day5/CustomMarkerComponent";

export default function AirbnbScreen() {
  return (
    <View>
      <Stack.Screen options={{ headerShown: false }} />
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -17.78629,
          longitude: -63.18117,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {apartments.map((apartment, id) => {
          return <CustomMarkerComponent key={id} apartment={apartment} />;
        })}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});
