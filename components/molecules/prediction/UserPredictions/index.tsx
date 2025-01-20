import { LoadingBasicText, LoadingSpinner } from '@/components/atoms'
import { ButtonBar } from '@/components/atoms/ButtonBar'
import { Divider } from '@/components/atoms/Divider'
import { useFetchPredictions, useProfile } from '@/hooks'
import { DateUtils } from '@/utils/date'
import { useMemo, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { PredictionList } from '../PredictionList'

export const UserPredictions = () => {
  const { data: profile } = useProfile()
  const { data: predictions, isLoading } = useFetchPredictions(
    profile?.id,
    'user',
  )

  const [listFilter, setListFilter] = useState<'active' | 'inactive'>('active')

  const activePredictions = useMemo(
    () =>
      predictions?.filter((prediction) => {
        const deadline = DateUtils.create(prediction.question.deadline)
        return deadline.isSameOrAfter(DateUtils.now())
      }),
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
      active: <PredictionList predictions={activePredictions} />,
      inactive: <PredictionList predictions={inactivePredictions} />,
    }),
    [activePredictions, inactivePredictions],
  )

  const buttons = [
    { text: 'Active', onPress: () => setListFilter('active') },
    { text: 'Inactive', onPress: () => setListFilter('inactive') },
  ]

  if (isLoading) return <LoadingSpinner />

  if (!predictions || predictions.length === 0) {
    return <LoadingBasicText altText="No predictions found" />
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
    paddingHorizontal: 20,
  },
})
