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
import { PanGestureHandler, PanGestureHandlerGestureEvent } from "react-native-gesture-handler";


type PanGestureHandlerProps = React.ComponentProps<typeof PanGestureHandler>;


//gesture handler

const SIZE = 100.0


export default function App() {

  //handling the horizontal pan

  const translateX = useSharedValue(0)

  //creating pangesture event
  const panGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onStart: (event) => { },
    onActive: (event) => {
      translateX.value = event.translationX
    },
    onEnd: (event) => { },
  }
  )

  //passing the translate X to the animated view

  const rStyle = useAnimatedStyle(() =>{
    return{
      transform: [{
        translateX: translateX.value,
      }]
    }

  })

  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={panGestureEvent}>
        <Animated.View style={[styles.square, rStyle]} />
      </PanGestureHandler>
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
  square: {
    width: SIZE,
    height: SIZE,
    backgroundColor: 'rgba(0, 0, 250, 0.5)',
    borderRadius: 20,
  }
});
