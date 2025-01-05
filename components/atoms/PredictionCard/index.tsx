import { PredictionWithRelations } from '@/types/prediction'
import { formatShortDate } from '@/utils/stringFormat/dateFormatter'
import { FC, useMemo } from 'react'
import { StyleSheet, View } from 'react-native'
import { useSharedValue } from 'react-native-reanimated'
import { AccordionItem } from '../AccordionView'
import { Card } from '../Card'
import { ConditionalText } from '../ConditionalText'
import { Text } from '../Text'

type PredictionCardProps = PredictionWithRelations

export const PredictionCard: FC<PredictionCardProps> = ({
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
