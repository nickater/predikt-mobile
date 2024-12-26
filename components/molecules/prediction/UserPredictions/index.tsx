import { Text } from '@/components/atoms'
import PredictionCard from '@/components/atoms/PredictionCard'
import { useAuth } from '@/hooks/auth'
import { useFetchUserPredictions } from '@/hooks/prediction/useFetchUserPredictions'
import * as React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

export const UserPredictions = () => {
  const { session } = useAuth()
  const { data: predictions, isLoading } = useFetchUserPredictions(
    session?.user.id,
  )

  if (isLoading) return <Text>Loading...</Text>

  return (
    <View style={styles.container}>
      <Text variant="bold" position="center">
        User Predictions
      </Text>
      <FlatList
        data={predictions}
        renderItem={({ item }) => <PredictionCard {...item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
})
