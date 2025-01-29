import { View, Text, SafeAreaView, Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import MarkDownDisplay from "@/components/day3/MarkDownDisplay";

export default function DayDetailsScreen() {
  const description = `#  Animated Splash Screen`;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 4 Animated Splash Screen" }} />

      <MarkDownDisplay>{description}</MarkDownDisplay>

      <Link href="/day4/splash" asChild>
        <Button title="Go to the splash screen animation" />
      </Link>
    </SafeAreaView>
  );
}
