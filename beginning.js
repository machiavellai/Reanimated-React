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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const react_native_reanimated_1 = __importStar(require("react-native-reanimated"));
const SIZE = 100.0;
const handleRotation = (progress) => {
    'worklet';
    return `${progress.value * 2 * Math.PI}rad`;
};
function App() {
    const progress = (0, react_native_reanimated_1.useSharedValue)(1);
    const scale = (0, react_native_reanimated_1.useSharedValue)(3);
    //animating the different properties
    const reanimatedStyle = (0, react_native_reanimated_1.useAnimatedStyle)(() => {
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
    (0, react_1.useEffect)(() => {
        progress.value = (0, react_native_reanimated_1.withRepeat)((0, react_native_reanimated_1.withSpring)(0.5), -1, true);
        scale.value = (0, react_native_reanimated_1.withRepeat)((0, react_native_reanimated_1.withSpring)(1), -1, true);
    }, []);
    return (<react_native_1.View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" /> */}
      <react_native_reanimated_1.default.View style={[
            { height: SIZE, width: SIZE, backgroundColor: "red" },
            reanimatedStyle,
        ]}/>
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
});
