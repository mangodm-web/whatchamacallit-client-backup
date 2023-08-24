import { SafeAreaView, Text, View } from "react-native";

export default function RecordingScreen() {
  return (
    <SafeAreaView className="flex-1 flex justify-around p-4 bg-white">
      <View className="space-y-2">
        <Text className="text-center text-gray-500 font-semibold">
          Recording
        </Text>
      </View>
    </SafeAreaView>
  );
}
