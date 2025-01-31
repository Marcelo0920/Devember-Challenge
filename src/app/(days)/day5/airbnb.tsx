import { View, Text, StyleSheet } from "react-native";
import React, { useMemo, useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Stack } from "expo-router";

import apartments from "@assets/data/day5/apartments.json";
import CustomMarkerComponent from "@/components/day5/CustomMarkerComponent";
import AppartmentListItem from "@/components/day5/AppartmentListItem";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";

export default function AirbnbScreen() {
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [isMapReady, setIsMapReady] = useState(false);
  const [mapRegion, setMapResion] = useState({
    latitude: -17.78629,
    longitude: -63.18117,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const snapPoints = useMemo(() => [80, "50%", "70%"], []);

  return (
    <View>
      <Stack.Screen options={{ headerShown: false }} />

      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={mapRegion}
        region={mapRegion}
        onMapReady={() => setIsMapReady(true)}
      >
        {apartments.map((apartment) => {
          return (
            <CustomMarkerComponent
              key={`${apartment.latitude}-${apartment.longitude}`}
              apartment={apartment}
              onPress={() => setSelectedApartment(apartment)}
            />
          );
        })}
      </MapView>

      {selectedApartment && (
        <View>
          <AppartmentListItem
            apartment={selectedApartment}
            containerStyle={{
              position: "absolute",
              bottom:
                typeof snapPoints[0] == "number" ? snapPoints[0] + 10 : 100,
              left: 10,
              right: 10,
            }}
          />
        </View>
      )}

      {isMapReady && (
        <BottomSheet
          maxDynamicContentSize={500}
          index={0}
          snapPoints={snapPoints}
          style={styles.contentContainer}
          onChange={(index) => console.log("onchange: " + index)}
        >
          <View style={{ flex: 1 }}>
            <Text style={styles.listTittle}>
              Over {apartments.length} places
            </Text>
            <BottomSheetFlatList
              data={apartments}
              contentContainerStyle={{ gap: 10, padding: 10 }}
              renderItem={({ item }) => <AppartmentListItem apartment={item} />}
            />
          </View>
        </BottomSheet>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
  contentContainer: {},
  listTittle: {
    textAlign: "center",
    fontFamily: "InterSemi",
    fontSize: 16,
    marginVertical: 5,
    marginBottom: 30,
  },
});
