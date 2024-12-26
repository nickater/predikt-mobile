import { QuestionType } from '@/types/question'
import React, { FC, useState } from 'react'
import { FlatList, Pressable, StyleSheet, View } from 'react-native'
import QuestionCard from '../QuestionCard'

type SelectableQuestionsProps = {
  questions: QuestionType[]
  onSelect: (question: QuestionType) => void
}
const SelectableQuestions: FC<SelectableQuestionsProps> = ({
  questions,
  onSelect,
}) => {
  const [selectedQuestion, setSelectedQuestion] = useState<null | string>(null)

  const handleSelect = (question: QuestionType) => {
    return () => {
      setSelectedQuestion(question.id)
      onSelect(question)
    }
  }

  return (
    <FlatList
      data={questions}
      keyExtractor={(item) => item.id}
      renderItem={({ item: question }) => (
        <Pressable onPress={handleSelect(question)}>
          <View style={selectedQuestion === question.id ? styles.selected : {}}>
            <QuestionCard
              title={question.title}
              deadline={question.deadline}
              predictionCount={question.total_predictions || 0}
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
