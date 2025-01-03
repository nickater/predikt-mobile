import { Stack } from 'expo-router'

export default function CreateQuestionLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'New Question' }} />
    </Stack>
  )
}
