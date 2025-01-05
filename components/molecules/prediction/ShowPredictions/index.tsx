import { Text } from '@/components/atoms'
import { useFetchPredictions } from '@/hooks'
import { FC } from 'react'
import { View, StyleSheet } from 'react-native'

type ShowPredictionsProps = {
  questionId: string
  show: boolean
}

export const ShowPredictions: FC<ShowPredictionsProps> = ({
  questionId,
  show,
}) => {
  const { data, isLoading } = useFetchPredictions(questionId)

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
