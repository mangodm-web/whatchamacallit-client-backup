import { Stack } from "expo-router";

export default () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "", headerShown: false }} />
      <Stack.Screen name="main" options={{ title: "" }} />
      <Stack.Screen name="recording" options={{ title: "" }} />
    </Stack>
  );
};
