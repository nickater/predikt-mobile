import { QuestionType } from '@/types/question'
import { FC } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { QuestionCard } from '@/molecules/question/QuestionCard'
import { LoadingBasicText } from '@/atoms/Loading/LoadingBasicText'
import { SelectableQuestionsProps } from './types'

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

  if (questions.length === 0) {
    return <LoadingBasicText altText="No questions found" />
  }

  return (
    <FlatList
      data={questions}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
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
  container: {
    paddingTop: 20,
  },
})
