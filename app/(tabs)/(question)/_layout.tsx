import { Stack } from 'expo-router'

export default function QuestionLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="view" options={{ presentation: 'modal' }} />
      <Stack.Screen name="create" options={{ presentation: 'modal' }} />
      <Stack.Screen name="detail" />
    </Stack>
  )
}
