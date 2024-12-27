import { formatShortDate } from '@/utils/stringFormat/dateFormatter'
import { useMemo } from 'react'
import { StyleSheet } from 'react-native'
import Card from '../Card'
import { ConditionalText } from '../ConditionalText'
import { Text } from '../Text'
import { QuestionCardProps } from './types'
import { getTimeRemaining } from './utils'

export const QuestionCard = (props: QuestionCardProps) => {
  const { title, deadline, predictionCount } = props
  const formattedDeadline = useMemo(() => {
    const deadlineDate = new Date(deadline)
    return formatShortDate(deadlineDate)
  }, [deadline])

  const timeRemaining = useMemo(() => getTimeRemaining(deadline), [deadline])

  return (
    <Card>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.deadline}>Deadline: {formattedDeadline}</Text>
      <Text style={styles.timeRemaining}>{timeRemaining}</Text>
      <ConditionalText variant="small" condition={predictionCount !== null}>
        Predictions: {predictionCount}
      </ConditionalText>
    </Card>
  )
}

const styles = StyleSheet.create({
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
    marginBottom: 5,
  },
})
