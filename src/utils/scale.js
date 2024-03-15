import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const vw = (number) => width * (number / 100);
const vh = (number) => height * (number / 100);
const vmin = (number) =>
  Math.min(width * (number / 100), height * (number / 100));
const vmax = (number) =>
  Math.max(width * (number / 100), height * (number / 100));

const scale = (size) => (width / guidelineBaseWidth) * size;
const verticalScale = (size) => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export { scale, verticalScale, moderateScale, vw, vh, vmin, vmax };