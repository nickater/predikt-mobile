import { Stack } from 'expo-router'

const QuestionDetailLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="[id]"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  )
}

export default QuestionDetailLayout
