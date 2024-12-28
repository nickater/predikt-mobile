import { formatShortDate } from '@/utils/stringFormat/dateFormatter'
import { useMemo } from 'react'
import { StyleSheet, View } from 'react-native'
import { Card } from '../Card'
import { Text } from '../Text'
import { QuestionCardProps } from './types'
import { getTimeRemaining } from './utils'
import { Divider } from '../Divider'

export const QuestionCard = (props: QuestionCardProps) => {
  const { title, deadline, predictionCount } = props
  const formattedDeadline = useMemo(() => {
    const deadlineDate = new Date(deadline)
    return formatShortDate(deadlineDate)
  }, [deadline])

  const timeRemaining = useMemo(() => getTimeRemaining(deadline), [deadline])

  return (
    <Card>
      <View style={styles.topContainer}>
        <Text variant="bold2" position="center">
          {title}
        </Text>
      </View>
      <Divider />
      <View style={styles.bottomContainer}>
        <Text style={styles.deadline}>Deadline: {formattedDeadline}</Text>
        <Text style={styles.timeRemaining}>{timeRemaining}</Text>
      </View>
      <Text variant="small">Predictions: {predictionCount}</Text>
    </Card>
  )
}

const styles = StyleSheet.create({
  title: {
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
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
})
