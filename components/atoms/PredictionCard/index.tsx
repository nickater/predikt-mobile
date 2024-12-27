import { PredictionType } from '@/types/prediction'
import React, { FC, useMemo } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from '../Text'
import { formatDate } from '@/utils/stringFormat/dateFormatter'
import { ConditionalText } from '../ConditionalText'
import Card from '../Card'

type PredictionCardProps = PredictionType & {
  questionTitle: string
  authorDisplayName: string | null
}

export const PredictionCard: FC<PredictionCardProps> = ({
  created_at,
  is_anonymous,
  prediction,
  authorDisplayName,
  questionTitle,
}) => {
  const formattedCreatedAt = useMemo(() => {
    if (!created_at) return ''

    const date = new Date(created_at)
    return formatDate(date)
  }, [created_at])

  return (
    <Card>
      <Text>Question: {questionTitle}?</Text>
      <Text variant="bold">Prediction: {prediction}</Text>
      <ConditionalText condition={authorDisplayName}>
        Author: {authorDisplayName}
      </ConditionalText>
      <Text>Anonymous: {is_anonymous ? 'Yes' : 'No'}</Text>
      <Text>Created: {formattedCreatedAt}</Text>
    </Card>
  )
}
