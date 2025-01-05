import { LoadingSpinner } from '@/components/atoms'
import { useFetchUserPredictions } from '@/hooks'
import { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import { PredictionList } from '../PredictionList'

type ViewPredictionsProps = unknown

export const ViewPredictions: FC<ViewPredictionsProps> = () => {
  const { data: userPredictions, isLoading } = useFetchUserPredictions()

  if (isLoading) return <LoadingSpinner />

  return (
    <View style={styles.container}>
      <PredictionList data={userPredictions} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
