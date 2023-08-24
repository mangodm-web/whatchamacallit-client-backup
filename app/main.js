import { FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text, View, SafeAreaView, Pressable } from "react-native";

import Avatar from "../components/Avatar";
import { NUMBER } from "../constants/number";
import { SAMPLE_QUESTION_ANSWERS } from "../constants/sampleQuestionAnswers";

export default function MainScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white">
      <SafeAreaView className="flex-1 flex mx-5">
        <Avatar />
        <View className="space-y-2 p-4 mt-1 bg-white border border-slate-300 rounded-lg">
          <Text className="text-center">Hello, how can I assist you?</Text>
        </View>
        {SAMPLE_QUESTION_ANSWERS &&
          SAMPLE_QUESTION_ANSWERS.length !== NUMBER.EMPTY_ARRAY_LENGTH && (
            <View className="space-y-3 mt-2">
              <Text className="text-lg text-gray-700 font-semibold">
                Here are some examples
              </Text>
              {SAMPLE_QUESTION_ANSWERS.map((questionAnswer) => {
                const { id, description, answer } = questionAnswer;

                return (
                  <View key={id} className="p-3 bg-[#fdc365] rounded-xl">
                    <View className="flex-row items-center space-x-1">
                      <Text className="text-lg text-gray-700 font-semibold">
                        {answer}
                      </Text>
                    </View>
                    <Text className="text-gray-700 font-medium">
                      {description}
                    </Text>
                  </View>
                );
              })}
            </View>
          )}
        <View className="flex-row justify-center">
          <Pressable
            onPress={() => router.push("/recording")}
            className="w-40 p-3 mt-3 bg-gray-200 rounded-full"
          >
            <Text className="text-center">
              <FontAwesome5 name="microphone" size={24} color="black" />
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
}
