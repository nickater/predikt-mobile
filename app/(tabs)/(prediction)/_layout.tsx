import { Stack } from 'expo-router'

export default function PredictionsLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="view" />
    </Stack>
  )
}
