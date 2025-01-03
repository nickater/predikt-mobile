import { PredictionList } from '../PredictionList'
import { Text } from '@/components/atoms'
import { ButtonBar } from '@/components/atoms/ButtonBar'
import { Divider } from '@/components/atoms/Divider'
import { useAuth, useFetchUserPredictions } from '@/hooks'
import { useMemo, useState } from 'react'
import { StyleSheet, View } from 'react-native'

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

  const questionMap = useMemo(
    () => ({
      active: <PredictionList data={activePredictions} />,
      inactive: <PredictionList data={inactivePredictions} />,
    }),
    [activePredictions, inactivePredictions],
  )

  if (isLoading) return <Text>Loading...</Text>

  const buttons = [
    { text: 'Active', onPress: () => setListFilter('active') },
    { text: 'Inactive', onPress: () => setListFilter('inactive') },
  ]

  return (
    <View style={styles.container}>
      <ButtonBar buttonProps={buttons} />
      <Divider />
      <View style={styles.list}>{questionMap[listFilter]}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flexGrow: 1,
  },
})
