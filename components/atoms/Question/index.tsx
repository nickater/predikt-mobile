import { QuestionType } from '@/types/question'
import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from '../Text'

type QuestionItemProps = {
  question: QuestionType
}

const QuestionItem: FC<QuestionItemProps> = ({ question }) => {
  return (
    <View style={styles.container}>
      <Text>{question.title}</Text>
    </View>
  )
}

export default QuestionItem

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
})
