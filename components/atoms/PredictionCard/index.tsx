import { PredictionType } from '@/types/prediction'
import React, { FC, useMemo } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from '../Text'
import { formatDate } from '@/utils/stringFormat/dateFormatter'

const PredictionCard: FC<PredictionType> = ({
  created_at,
  is_anonymous,
  prediction,
  question_id,
  user_id,
}) => {
  const formattedCreatedAt = useMemo(() => {
    if (!created_at) return ''

    const date = new Date(created_at)
    return formatDate(date)
  }, [created_at])

  return (
    <View style={styles.card}>
      <Text>Prediction: {prediction}</Text>
      <Text>Question ID: {question_id}</Text>
      <Text>User ID: {user_id}</Text>
      <Text>Anonymous: {is_anonymous ? 'Yes' : 'No'}</Text>
      <Text>Created: {formattedCreatedAt}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    margin: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
})

export default PredictionCard
