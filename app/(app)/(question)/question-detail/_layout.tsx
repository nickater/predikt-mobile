import { HeaderGoBackButton } from '@/components'
import { Stack } from 'expo-router'
import * as React from 'react'

const QuestionDetailLayout = () => {
  return (
    <Stack screenOptions={{ headerTitle: 'Question Detail' }}>
      <Stack.Screen
        name="[id]"
        options={{
          headerLeft: HeaderGoBackButton,
        }}
      />
    </Stack>
  )
}

export default QuestionDetailLayout
