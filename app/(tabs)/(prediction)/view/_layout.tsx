import { Stack } from 'expo-router'

export default function ViewPredictionsScreen() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  )
}
