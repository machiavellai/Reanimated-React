import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withRepeat,
  useAnimatedGestureHandler,
  withTiming,
} from "react-native-reanimated";

const SIZE = 100.0;

const handleRotation = (progress: Animated.SharedValue<number>) => {
  'worklet'

  return `${progress.value * 2 * Math.PI}rad`
}

export default function App() {
  const progress = useSharedValue(1);
  const scale = useSharedValue(3);

  //animating the different properties
  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      borderRadius: (progress.value * SIZE) / 2,

      transform: [
        { scale: scale.value },
        { rotate: handleRotation(progress) },
      ],
    };
  }, []);

  //animating progeess
  //using with timming for the duration of the animation
  useEffect(() => {
    progress.value = withRepeat(withSpring(0.5), -1, true);
    scale.value = withRepeat(withSpring(1), -1, true);
  }, []);

  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
      <Animated.View
        style={[
          { height: SIZE, width: SIZE, backgroundColor: "red" },
          reanimatedStyle,
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
  