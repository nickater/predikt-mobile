import QuestionItem from '@/components/atoms/Question'
import { QuestionType } from '@/types/question'
import React, { FC } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'

type SelectableQuestionsProps = {
  questions: QuestionType[]
  onSelect: (question: QuestionType) => void
}
const SelectableQuestions: FC<SelectableQuestionsProps> = ({
  questions,
  onSelect,
}) => {
  const handleSelect = (question: QuestionType) => {
    return () => onSelect(question)
  }

  return (
    <View>
      {questions.map((question) => (
        <Pressable onPress={handleSelect(question)} key={question.id}>
          <View key={question.id}>
            <QuestionItem question={question} />
          </View>
        </Pressable>
      ))}
    </View>
  )
}

export default SelectableQuestions

const styles = StyleSheet.create({})
