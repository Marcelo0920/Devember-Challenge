import { View, Text, Button } from "react-native";
import React, { useRef } from "react";
import LottieView from "lottie-react-native";
import Animated, { FadeIn, FadeOut, ZoomOut } from "react-native-reanimated";

export default function SplashScreenLoader({
  onAnimationFinish = (isCancelled) => {},
}: {
  onAnimationFinish?: (isCancelled: boolean) => void;
}) {
  const animation = useRef<LottieView>(null);

  return (
    <Animated.View
      exiting={ZoomOut.duration(300)}
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
      }}
    >
      <LottieView
        autoPlay
        ref={animation}
        onAnimationFinish={onAnimationFinish}
        loop={false}
        style={{
          width: "80%",
          maxWidth: 400,
          height: 400,
        }}
        source={require("@assets/lottie/netflix.json")}
      />
    </Animated.View>
  );
}
