import { Card, ConditionalText, Text } from '@/components/atoms'
import { AccordionItem } from '@/components/molecules/AccordionItem'
import { formatShortDate } from '@/utils/stringFormat/dateFormatter'
import { useMemo } from 'react'
import { StyleSheet, View } from 'react-native'
import { useSharedValue } from 'react-native-reanimated'
import { PredictionCardProps } from './types'

export const PredictionCard: PredictionCardProps = ({
  created_at,
  prediction,
  question: {
    author: { username: authorDisplayName } = {},
    title: questionTitle,
  },
}) => {
  const open = useSharedValue(false)
  const onPress = () => {
    open.value = !open.value
  }

  const formattedCreatedAt = useMemo(() => {
    if (!created_at) return ''

    const date = new Date(created_at)
    return formatShortDate(date)
  }, [created_at])

  return (
    <Card
      showPressedColor={false}
      style={{ backgroundColor: 'f5f5f5' }}
      onPress={onPress}
    >
      <View>
        <View style={styles.predictionTopRow}>
          <Text>{formattedCreatedAt}</Text>
          <ConditionalText condition={authorDisplayName}>
            {authorDisplayName}
          </ConditionalText>
        </View>
        <View>
          <Text variant="bold">{questionTitle}</Text>
        </View>
      </View>
      <AccordionItem isExpanded={open} viewKey="Accordion">
        <View style={styles.predictionBottomRow}>
          <Text>{prediction}</Text>
        </View>
      </AccordionItem>
    </Card>
  )
}

const styles = StyleSheet.create({
  predictionTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  predictionBottomRow: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    width: '100%',
  },
})
