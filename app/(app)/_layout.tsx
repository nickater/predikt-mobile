import { Text } from "@/components";
import { useAuth } from "@/hooks/auth";
import { Redirect, Stack } from "expo-router";

export default () => {
  const { session, loading } = useAuth();
  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (!session) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="question" options={{ presentation: "modal" }} />
      <Stack.Screen name="prediction" options={{ presentation: "modal" }} />
    </Stack>
  );
};
