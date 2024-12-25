import { Text, View, StyleSheet } from 'react-native'
import { QuestionCardProps } from './types'
import { QuestionType } from '@/types/question'

const QuestionCard = (props: QuestionCardProps) => {
  const { title, deadline, predictionCount, author, timeRemaining } = props

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.deadline}>Deadline: {deadline}</Text>
      <Text style={styles.predictions}>Predictions: {predictionCount} </Text>
      <Text style={styles.timeRemaining}>Time Remaining: {timeRemaining}</Text>
      <Text style={styles.author}>Author: {author}</Text>
    </View>
  )
}

export default QuestionCard

const styles = StyleSheet.create({
  container: {
    // padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  deadline: {
    fontSize: 16,
  },
  predictions: {
    fontSize: 16,
  },
  timeRemaining: {
    fontSize: 16,
  },
  author: {
    fontSize: 16,
  },
})

// export const mapQuestionToQuestionCardProps = (question: QuestionType): QuestionCardProps => {
