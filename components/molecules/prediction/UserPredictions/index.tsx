import { Text } from '@/components/atoms'
import { ButtonBar } from '@/components/atoms/ButtonBar'
import { Divider } from '@/components/atoms/Divider'
import { PredictionCard } from '@/components/atoms/PredictionCard'
import { useAuth } from '@/hooks/auth'
import { useFetchUserPredictions } from '@/hooks/prediction/useFetchUserPredictions'
import * as React from 'react'
import { useMemo, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import Animated, { SlideInLeft } from 'react-native-reanimated'

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
    if (listFilter === 'active' && activePredictions) return activePredictions
    if (listFilter === 'inactive' && inactivePredictions)
      return inactivePredictions
    return []
  }, [activePredictions, inactivePredictions, listFilter])

  if (isLoading) return <Text>Loading...</Text>

  return (
    <View style={styles.container}>
      <ButtonBar
        buttonProps={[
          { text: 'Active', onPress: () => setListFilter('active') },
          { text: 'Inactive', onPress: () => setListFilter('inactive') },
        ]}
      />
      <Divider />
      {predictionToShow?.length > 0 ? (
        <FlatList
          data={predictionToShow}
          style={styles.list}
          renderItem={({ item }) => (
            <Animated.View entering={SlideInLeft}>
              <PredictionCard
                {...item}
                questionTitle={item.question.title}
                authorDisplayName={item.question.author.username}
              />
            </Animated.View>
          )}
        />
      ) : (
        <Text>No predictions found</Text>
      )}
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
