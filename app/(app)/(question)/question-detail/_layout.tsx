import GoBackButton from '@/components/atoms/HeaderGoBack'
import { Stack } from 'expo-router'
import * as React from 'react'
import { Text, View, StyleSheet } from 'react-native'

interface QuestionDetailLayoutProps {}

const QuestionDetailLayout = (props: QuestionDetailLayoutProps) => {
  return (
    <Stack screenOptions={{ headerTitle: 'Question Detail' }}>
      <Stack.Screen
        name="[id]"
        options={{
          headerLeft: GoBackButton,
        }}
      />
    </Stack>
  )
}

export default QuestionDetailLayout
