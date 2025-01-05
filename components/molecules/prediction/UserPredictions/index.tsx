import { LoadingBasicText, LoadingSpinner } from '@/components/atoms'
import { ButtonBar } from '@/components/atoms/ButtonBar'
import { Divider } from '@/components/atoms/Divider'
import { useAuth, useFetchUserPredictions } from '@/hooks'
import { useMemo, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { PredictionList } from '../PredictionList'

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

  
  const buttons = [
    { text: 'Active', onPress: () => setListFilter('active') },
    { text: 'Inactive', onPress: () => setListFilter('inactive') },
  ]

  if (isLoading) return <LoadingSpinner />
  
  if (!predictions || predictions.length === 0) {
    return <LoadingBasicText altText='No predictions found' />
  }
  
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
