import { View, Text, Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

export default function DayDetailsScreen() {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 2: On Boarding" }} />
      <Text>DayDetailsScreen</Text>

      <Link href="/day2/OnBoarding" asChild>
        <Button title="Go to On Boarding" />
      </Link>
    </View>
  );
}
