import { PredictionWithRelations } from '@/types/prediction'
import { formatShortDate } from '@/utils/stringFormat/dateFormatter'
import { FC, useMemo } from 'react'
import { StyleSheet, View } from 'react-native'
import { Card } from '../Card'
import { ConditionalText } from '../ConditionalText'
import { Divider } from '../Divider'
import { Text } from '../Text'

type PredictionCardProps = PredictionWithRelations

export const PredictionCard: FC<PredictionCardProps> = ({
  created_at,
  is_anonymous,
  prediction,
  question: {
    author: { username: authorDisplayName } = {},
    title: questionTitle,
  },
}) => {
  const formattedCreatedAt = useMemo(() => {
    if (!created_at) return ''

    const date = new Date(created_at)
    return formatShortDate(date)
  }, [created_at])

  return (
    <Card>
      <View style={styles.questionContainer}>
        <View style={styles.questionTopRow}>
          <ConditionalText condition={authorDisplayName}>
            {authorDisplayName}
          </ConditionalText>
          <Text position="center" variant="bold">
            QUESTION
          </Text>
          <Text>{formattedCreatedAt}</Text>
        </View>
        <View style={styles.questionBottomRow}>
          <Text>{questionTitle}</Text>
        </View>
      </View>
      <Divider />
      <View style={styles.predictionContainer}>
        <View style={styles.predictionTopRow}>
          <Text position="center" variant="bold">
            PREDICTION
          </Text>
        </View>
        <View style={styles.predictionBottomRow}>
          <Text>{prediction}</Text>
        </View>
        <View style={styles.anonymousContainer}>
          <Text>Anonymous: {is_anonymous ? 'Yes' : 'No'}</Text>
        </View>
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
  questionContainer: {
    paddingVertical: 18,
  },
  questionTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  questionBottomRow: {
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  predictionContainer: {
    paddingTop: 18,
  },
  predictionTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  predictionBottomRow: {
    padding: 10,
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  anonymousContainer: {
    marginTop: 10,
  },
})
