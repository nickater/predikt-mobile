import { PredictionCard } from '@/components/molecules/prediction/PredictionCard'
import { FlatList, StyleSheet } from 'react-native'
import { PredictionListProps } from './types'

export const PredictionList: PredictionListProps = ({ predictions }) => {
  return (
    <FlatList
      data={predictions}
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
