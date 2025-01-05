import { PredictionCard } from '@/components/atoms/PredictionCard'
import { PredictionWithRelations } from '@/types/prediction'
import { FlatList, StyleSheet } from 'react-native'

type PredictionListProps = {
  data: PredictionWithRelations[]
}

export const PredictionList = ({ data }: PredictionListProps) => {
  return (
    <FlatList
      data={data}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => <PredictionCard {...item} />}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
})
