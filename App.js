"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const react_native_reanimated_1 = __importStar(require("react-native-reanimated"));
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
//gesture handler
const SIZE = 100.0;
function App() {
    //handling the horizontal pan
    const translateX = (0, react_native_reanimated_1.useSharedValue)(0);
    //creating pangesture event
    const panGestureEvent = (0, react_native_reanimated_1.useAnimatedGestureHandler)({
        onStart: (event) => { },
        onActive: (event) => {
            translateX.value = event.translationX;
        },
        onEnd: (event) => { },
    });
    //passing the translate X to the animated view
    const rStyle = (0, react_native_reanimated_1.useAnimatedStyle)(() => {
        return {
            transform: [{
                    translateX: translateX.value,
                }]
        };
    });
    return (<react_native_1.View style={styles.container}>
      <react_native_gesture_handler_1.PanGestureHandler onGestureEvent={panGestureEvent}>
        <react_native_reanimated_1.default.View style={[styles.square, rStyle]}/>
      </react_native_gesture_handler_1.PanGestureHandler>
    </react_native_1.View>);
}
exports.default = App;
const styles = react_native_1.StyleSheet.create({
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
