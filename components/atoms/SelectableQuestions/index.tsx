import { QuestionType } from '@/types/question'
import React, { FC } from 'react'
import { FlatList, Pressable, StyleSheet, View } from 'react-native'
import { QuestionCard } from '../QuestionCard'

type SelectableQuestionsProps = {
  questions: (QuestionType & { predictionExists: boolean })[]
  onSelect: (question: QuestionType) => void
  selectedQuestionId?: string | null
  showPredictionCount?: boolean
}

export const SelectableQuestions: FC<SelectableQuestionsProps> = ({
  questions,
  onSelect,
  selectedQuestionId,
  showPredictionCount = false,
}) => {
  const handleSelect = (question: QuestionType) => {
    return () => {
      onSelect(question)
    }
  }

  const predictionCount = (question: QuestionType) => {
    if (!showPredictionCount) return -1
    return question.total_predictions
  }

  return (
    <FlatList
      data={questions}
      keyExtractor={(item) => item.id}
      renderItem={({ item: question }) => {
        return (
          <QuestionCard
            id={question.id}
            authorId={question.author_id}
            isSelected={selectedQuestionId === question.id}
            title={question.title}
            deadline={question.deadline}
            predictionCount={predictionCount(question)}
            predictionExists={question.predictionExists}
            onSelect={handleSelect(question)}
          />
        )
      }}
    />
  )
}

const styles = StyleSheet.create({
  selected: {
    backgroundColor: 'lightblue',
    borderRadius: 10,
  },
})
