import { Text, View, StyleSheet } from 'react-native'
import { QuestionCardProps } from './types'
import { useMemo } from 'react'
import { getTimeRemaining } from './utils'

const QuestionCard = (props: QuestionCardProps) => {
  const { title, deadline, predictionCount } = props

  const timeRemaining = useMemo(() => getTimeRemaining(deadline), [deadline])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.deadline}>Deadline: {deadline}</Text>
      <Text style={styles.predictions}>Predictions: {predictionCount} </Text>
      <Text style={styles.timeRemaining}>Time Remaining: {timeRemaining}</Text>
    </View>
  )
}

export default QuestionCard

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    margin: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  deadline: {
    fontSize: 16,
    marginBottom: 5,
  },
  predictions: {
    fontSize: 16,
    marginBottom: 5,
  },
  timeRemaining: {
    fontSize: 16,
  },
})
