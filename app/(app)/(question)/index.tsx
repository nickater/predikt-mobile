import { CustomSafeAreaView, ViewQuestions } from '@/components'
import { useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'

export default () => {
  const router = useRouter()
  const handleQuestionPress = (questionId: string) => {
    router.push(`/(app)/(question)/question-detail/${questionId}`)
  }

  const handleAddQuestionPress = () => {
    router.push(`/(app)/(question)/create`)
  }

  return (
    <CustomSafeAreaView style={styles.container}>
      <ViewQuestions
        onQuestionPress={handleQuestionPress}
        onAddQuestionPress={handleAddQuestionPress}
      />
    </CustomSafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
})
