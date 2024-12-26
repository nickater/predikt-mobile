import { CustomSafeAreaView, ViewQuestions } from '@/components'
import { useRouter } from 'expo-router'
import React from 'react'

export default function QuestionTab() {
  const router = useRouter()

  const handleQuestionPress = (questionId: string) => {
    router.push(`/(app)/(question)/question-detail/${questionId}`)
  }

  return (
    <CustomSafeAreaView>
      <ViewQuestions onQuestionPress={handleQuestionPress} />
    </CustomSafeAreaView>
  )
}
