import { useState } from "react";
import { Image, SafeAreaView, Pressable, Text, View } from "react-native";

import {
  activeRecordingImage,
  inactiveRecordingImage,
  recordingSoundWaveImage,
} from "../constants/imageAssets";

export default function RecordingScreen() {
  const [recording, setRecording] = useState(false);

  function startRecording() {
    setRecording(true);
  }

  function stopRecording() {
    setRecording(false);
  }

  const imageSource = recording ? activeRecordingImage : inactiveRecordingImage;

  return (
    <SafeAreaView className="flex-1 flex p-4 bg-white">
      <View className="flex items-center space-y-2 mt-48">
        <Pressable
          className="space-y-2"
          onPress={recording ? stopRecording : startRecording}
        >
          <Image className="w-64 h-64 rounded-full" source={imageSource} />
        </Pressable>
        {recording && (
          <>
            <Text className="mt-5 text-xl text-gray-500 font-semibold">
              00:00
            </Text>
            <Image
              className="w-30 h-10 mt-5 rounded-full"
              source={recordingSoundWaveImage}
            />
          </>
        )}
      </View>
    </SafeAreaView>
  );
}
