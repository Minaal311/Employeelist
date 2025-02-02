import { Stack } from "expo-router";
import FlashMessage from "react-native-flash-message";

export default function RootLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
      <FlashMessage
        titleStyle={{
          marginRight: 5,
          fontSize: 12,
        }}
        position="top"
      />
    </>
  );
}
