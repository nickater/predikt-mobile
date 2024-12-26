import { useAuth } from '@/hooks/auth'
import { useFetchUserPredictions } from '@/hooks/prediction/useFetchUserPredictions'
import * as React from 'react'
import { Text, View, StyleSheet } from 'react-native'

interface UserPredictionsProps {}

export const UserPredictions = (props: UserPredictionsProps) => {
  const { session } = useAuth()
  const { data: predictions, isLoading } = useFetchUserPredictions(
    session?.user.id,
  )

  if (isLoading) return <Text>Loading...</Text>

  return (
    <View style={styles.container}>
      <Text>User Prediction</Text>
      {predictions?.map((prediction) => (
        <Text key={prediction.id}>{prediction.prediction}</Text>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
})
