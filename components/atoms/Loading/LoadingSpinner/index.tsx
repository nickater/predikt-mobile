import { FC } from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'

type LoadingSpinnerProps = {}

export const LoadingSpinner: FC<LoadingSpinnerProps> = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
