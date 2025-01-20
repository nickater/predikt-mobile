import { Text } from '@/components/atoms'
import { useFetchPredictions } from '@/hooks'
import { View, StyleSheet } from 'react-native'
import { ShowPredictionsProps } from './types'

export const ShowPredictions: ShowPredictionsProps = ({ questionId, show }) => {
  const { data, isLoading } = useFetchPredictions(questionId, 'question')

  return (
    <View style={styles.container}>
      {isLoading ? <Text>Loading...</Text> : null}
      {data?.map((prediction) => (
        <Text key={prediction.id}>{prediction.prediction}</Text>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
