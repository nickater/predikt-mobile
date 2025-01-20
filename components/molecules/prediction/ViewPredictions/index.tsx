import { LoadingSpinner } from '@/components/atoms'
import { StyleSheet, View } from 'react-native'
import { PredictionList } from '../PredictionList'
import { ViewPredictionsProps } from './types'

export const ViewPredictions: ViewPredictionsProps = ({ data, isLoading }) => {
  if (isLoading) return <LoadingSpinner />

  return (
    <View style={styles.container}>
      <PredictionList predictions={data} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
