import { Text } from '@/components/atoms'
import { PredictionCard } from '@/components/atoms/PredictionCard'
import { PredictionWithRelations } from '@/types/prediction'
import { FlatList, StyleSheet, View } from 'react-native'

interface PredictionListProps {
  data: PredictionWithRelations[]
}

const PredictionList = ({ data }: PredictionListProps) => {
  if (data.length === 0) {
    return (
      <View style={styles.noDataContainer}>
        <Text position="center">No predictions found</Text>
      </View>
    )
  }

  return (
    <FlatList
      data={data}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <PredictionCard
          {...item}
          questionTitle={item.question.title}
          authorDisplayName={item.question.author.username}
        />
      )}
    />
  )
}

export default PredictionList

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  noDataContainer: {
    flex: 1,
    justifyContent: 'center',
  },
})
