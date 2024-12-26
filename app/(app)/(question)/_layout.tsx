import { Stack } from 'expo-router'

export default function QuestionLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="create" />
      <Stack.Screen name="view" />
    </Stack>
  )
}
