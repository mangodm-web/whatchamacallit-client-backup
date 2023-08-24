import { View, Image } from "react-native";

const DEFAULT_IMAGE = require("../assets/bot.png");
const DEFAULT_STYLES = "w-32 h-32 mt-3";

export default function Avatar({
  imageSrc = DEFAULT_IMAGE,
  styles = DEFAULT_STYLES,
}) {
  return (
    <View className="flex-row justify-center">
      <Image source={imageSrc} className={styles} />
    </View>
  );
}
