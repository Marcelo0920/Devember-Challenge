import { View, Text, SafeAreaView, Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import MarkDownDisplay from "@/components/day3/MarkDownDisplay";

export default function DayDetailsScreen() {
  const description = `#  Airbnb Map`;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 5 Airbnb Map" }} />

      <MarkDownDisplay>{description}</MarkDownDisplay>

      <Link href="/day5/airbnb" asChild>
        <Button title="Go to the Airbnb Map" />
      </Link>
    </SafeAreaView>
  );
}
