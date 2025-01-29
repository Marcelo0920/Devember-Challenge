import { View, Text, Button } from "react-native";
import React, { useRef } from "react";
import LottieView from "lottie-react-native";

export default function AnimationScreen() {
  const animation = useRef<LottieView>(null);

  return (
    <View>
      <LottieView
        autoPlay
        style={{
          width: 400,
          height: 400,
          backgroundColor: "#eee",
        }}
        source={require("@assets/lottie/netflix.json")}
      />

      <Button title="Play" onPress={() => animation.current?.play()} />
    </View>
  );
}
