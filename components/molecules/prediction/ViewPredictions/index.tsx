import { LoadingSpinner } from '@/components/atoms'
import { PredictionWithRelations } from '@/types/prediction'
import { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import { PredictionList } from '../PredictionList'

type ViewPredictionsProps = {
  data: PredictionWithRelations[]
  isLoading: boolean
}

export const ViewPredictions: FC<ViewPredictionsProps> = ({
  data,
  isLoading,
}) => {
  if (isLoading) return <LoadingSpinner />

  return (
    <View style={styles.container}>
      <PredictionList data={data} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
