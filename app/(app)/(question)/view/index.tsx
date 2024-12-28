import { CustomSafeAreaView, ViewQuestions } from '@/components'
import { useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'

export default () => {
  const router = useRouter()
  const handleQuestionPress = (questionId: string) => {
    router.push(`/(app)/(question)/question-detail/${questionId}`)
  }

  return (
    <CustomSafeAreaView style={styles.container}>
      <ViewQuestions onQuestionPress={handleQuestionPress} />
    </CustomSafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
})
