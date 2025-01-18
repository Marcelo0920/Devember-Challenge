import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";
import React, { useState } from "react";
import { router, Stack } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

import {
  Directions,
  Gesture,
  GestureDetector,
} from "react-native-gesture-handler";

import Animated, {
  FadeIn,
  FadeOut,
  BounceInRight,
  BounceOutLeft,
  SlideInLeft,
  SlideOutRight,
  SlideInRight,
  SlideOutLeft,
} from "react-native-reanimated";

const onBoardingSteps = [
  {
    title: "Track every transaction",
    icon: "people-arrows",
    description:
      "Monitor your spending and contribution, ensuring every penny aligns with your familys aspirations",
  },
  {
    title: "Learn and grow together",
    icon: "snowflake",
    description:
      "Monitor your spending and contribution, ensuring every penny aligns with your familys aspirations",
  },
  {
    title: "Education for Children",
    icon: "slideshare",
    description:
      "Monitor your spending and contribution, ensuring every penny aligns with your familys aspirations",
  },
];

export default function OnBoardingScreen() {
  const [screenIndex, setScreenIndex] = useState(0);

  const data = onBoardingSteps[screenIndex];

  const onContinue = () => {
    const isLastScreen = screenIndex == onBoardingSteps.length - 1;

    if (isLastScreen) {
      endBoarding();
    } else {
      setScreenIndex(screenIndex + 1);
    }
  };

  const onBack = () => {
    const isLastScreen = screenIndex == 0;

    if (isLastScreen) {
      endBoarding();
    } else {
      setScreenIndex(screenIndex - 1);
    }
  };

  const endBoarding = () => {
    setScreenIndex(0);
    router.back();
  };

  const swipeForward = Gesture.Fling()
    .direction(Directions.LEFT)
    .onEnd(onContinue);

  const swipeBack = Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack);

  const swipes = Gesture.Simultaneous(swipeForward, swipeBack);
  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="light" />

      <GestureDetector gesture={swipes}>
        <View style={styles.pageContent} key={screenIndex}>
          <View style={styles.stepIndicatorContainer}>
            {onBoardingSteps.map((step, index) => (
              <View
                key={index}
                style={[
                  styles.stepIndicator,
                  {
                    backgroundColor: index == screenIndex ? "#CEF202" : "grey",
                  },
                ]}
              ></View>
            ))}
          </View>

          <Animated.View entering={FadeIn} exiting={FadeOut}>
            <FontAwesome5
              style={styles.image}
              name={data.icon}
              size={70}
              color="#CEF202"
            />
          </Animated.View>
          <View style={styles.footer}>
            <Animated.Text
              entering={SlideInRight}
              exiting={SlideOutLeft}
              style={styles.title}
            >
              {data.title}
            </Animated.Text>
            <Animated.Text
              entering={SlideInRight.delay(200)}
              exiting={SlideOutLeft}
              style={styles.description}
            >
              {data.description}
            </Animated.Text>

            <View style={styles.buttonsRow}>
              <Text onPress={() => endBoarding()} style={styles.buttonText}>
                Skip
              </Text>
              <Pressable onPress={() => onContinue()} style={styles.button}>
                <Text style={styles.buttonText}>Continue</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </GestureDetector>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#15141A",
    padding: 20,
  },

  image: {
    alignSelf: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 50,
    fontFamily: "InterBlack",
    color: "#FDFDFD",
    letterSpacing: 1.3,
    marginVertical: 10,
  },

  footer: {
    marginTop: "auto",
  },

  description: {
    color: "gray",
    fontSize: 18,
    fontFamily: "Inter",
  },
  pageContent: {
    padding: 20,
    flex: 1,
  },

  buttonsRow: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  button: {
    backgroundColor: "#302E38",
    borderRadius: 20,
    alignItems: "center",
    flex: 1,
  },
  buttonText: {
    color: "#FDFDFD",
    fontFamily: "InterSemi",
    padding: 15,
    fontSize: 16,
    paddingHorizontal: 25,
  },

  stepIndicator: {
    flex: 1,
    height: 3,
    backgroundColor: "gray",
    margin: 5,
    borderRadius: 10,
  },
  stepIndicatorContainer: {
    flexDirection: "row",
    marginTop: 25,
    marginBottom: 20,
    gap: 5,
  },
});
