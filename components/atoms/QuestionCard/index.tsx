import { formatShortDate } from '@/utils/stringFormat/dateFormatter'
import { FontAwesome } from '@expo/vector-icons'
import { useMemo } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { Card } from '../Card'
import { ConditionalText } from '../ConditionalText'
import { Divider } from '../Divider'
import { Text } from '../Text'
import { QuestionCardProps } from './types'
import { getTimeRemaining } from './utils'
import { useGetUsernameById } from '@/hooks/profile/useGetUsernameById'

export const QuestionCard = (props: QuestionCardProps) => {
  const {
    id,
    title,
    deadline,
    predictionCount,
    predictionExists,
    isSelected,
    onSelect,
    authorId,
  } = props
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

  if (isLoading) return <Text>Loading...</Text>

  return (
    <Pressable onPress={handleSelect(id)}>
      <View style={isSelected ? styles.selected : {}}>
        <Card>
          <View style={styles.topContainer}>
            <Text variant="bold2" position="center">
              {title}
            </Text>
            {predictionExists && (
              <FontAwesome
                style={{ paddingLeft: 6 }}
                name="check-circle"
                size={24}
                color="green"
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
      </View>
    </Pressable>
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
    borderRadius: 10,
  },
})
