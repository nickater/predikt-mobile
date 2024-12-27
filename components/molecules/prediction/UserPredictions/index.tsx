import { Text } from '@/components/atoms'
import { ButtonBar } from '@/components/atoms/ButtonBar'
import { Divider } from '@/components/atoms/Divider'
import { PredictionCard } from '@/components/atoms/PredictionCard'
import { useAuth } from '@/hooks/auth'
import { useFetchUserPredictions } from '@/hooks/prediction/useFetchUserPredictions'
import * as React from 'react'
import { useMemo, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

export const UserPredictions = () => {
  const { session } = useAuth()
  const { data: predictions, isLoading } = useFetchUserPredictions(
    session?.user.id,
  )

  const [listFilter, setListFilter] = useState<'active' | 'inactive'>('active')

  const activePredictions = useMemo(
    () =>
      predictions?.filter(
        (prediction) => new Date(prediction.question.deadline) > new Date(),
      ),
    [predictions],
  )

  const inactivePredictions = useMemo(
    () =>
      predictions?.filter(
        (prediction) => new Date(prediction.question.deadline) < new Date(),
      ),
    [predictions],
  )

  const predictionToShow = useMemo(() => {
    if (listFilter === 'active') return activePredictions
    if (listFilter === 'inactive') return inactivePredictions
    return []
  }, [activePredictions, inactivePredictions, listFilter])

  if (isLoading) return <Text>Loading...</Text>

  if (!predictions) return <Text>No predictions found</Text>

  return (
    <View style={styles.container}>
      <ButtonBar
        buttonProps={[
          { text: 'Active', onPress: () => setListFilter('active') },
          { text: 'Inactive', onPress: () => setListFilter('inactive') },
        ]}
      />
      <Divider />
      <FlatList
        data={predictionToShow}
        style={styles.list}
        renderItem={({ item }) => (
          <PredictionCard
            {...item}
            questionTitle={'What is the meaning of life?'}
            authorDisplayName={item.question.author.username}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    padding: 16,
  },
})
