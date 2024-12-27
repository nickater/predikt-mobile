import { QuestionType } from '@/types/question'
import React, { FC } from 'react'
import { FlatList, Pressable, StyleSheet, View } from 'react-native'
import { QuestionCard } from '../QuestionCard'

type SelectableQuestionsProps = {
  questions: QuestionType[]
  onSelect: (question: QuestionType) => void
  selectedQuestionId?: string | null
  showPredictionCount?: boolean
}
const SelectableQuestions: FC<SelectableQuestionsProps> = ({
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
    if (!showPredictionCount) return null
    return question.total_predictions
  }

  return (
    <FlatList
      data={questions}
      keyExtractor={(item) => item.id}
      renderItem={({ item: question }) => (
        <Pressable onPress={handleSelect(question)}>
          <View
            style={selectedQuestionId === question.id ? styles.selected : {}}
          >
            <QuestionCard
              title={question.title}
              deadline={question.deadline}
              predictionCount={predictionCount(question)}
            />
          </View>
        </Pressable>
      )}
    />
  )
}

export default SelectableQuestions

const styles = StyleSheet.create({
  selected: {
    backgroundColor: 'lightblue',
    borderRadius: 10,
  },
})
