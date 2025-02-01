import { formatShortDate } from '@/utils/stringFormat/dateFormatter'
import { FontAwesome } from '@expo/vector-icons'
import { useMemo } from 'react'
import { StyleSheet, View } from 'react-native'
import { Card } from '../../../atoms/Card'
import { ConditionalText } from '../../../atoms/ConditionalText'
import { Divider } from '../../../atoms/Divider'
import { Text } from '../../../atoms/Text'
import { QuestionCardProps } from './types'
import { getTimeRemaining } from './utils'
import { useGetUsernameById, useThemeColor } from '@/hooks'

export const QuestionCard = (props: QuestionCardProps) => {
  const {
    id,
    title,
    deadline,
    predictionCount,
    predictionExists,
    onSelect,
    authorId,
  } = props
  const theme = useThemeColor()

  const formattedDeadline = useMemo(() => {
    const deadlineDate = new Date(deadline)
    return formatShortDate(deadlineDate)
  }, [deadline])

  const timeRemaining = useMemo(() => getTimeRemaining(deadline), [deadline])

  const { data, isLoading } = useGetUsernameById(authorId)

  const handleSelect = (questionId: string) => {
    return () => {
      onSelect(questionId)
    }
  }

  if (isLoading) return null

  return (
    <Card onPress={handleSelect(id)}>
      <View style={styles.topContainer}>
        <Text variant="extraBold" style={{ flexShrink: 1 }}>
          {title}
        </Text>
        {predictionExists && (
          <FontAwesome
            style={{ marginLeft: 6 }}
            name="check-circle"
            size={24}
            color={theme.textSecondary}
          />
        )}
      </View>
      <ConditionalText condition={data}>Created by: {data}</ConditionalText>
      <Divider />
      <View style={styles.bottomContainer}>
        <Text style={styles.deadline}>Deadline: {formattedDeadline}</Text>
        <Text style={styles.timeRemaining}>{timeRemaining}</Text>
      </View>
      <ConditionalText condition={predictionCount >= 0} variant="small">
        Predictions: {predictionCount}
      </ConditionalText>
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
  selected: {
    backgroundColor: 'lightblue',
  },
  pressedIn: {
    backgroundColor: 'lightblue',

    opacity: 0.5,
  },
})
