import { QuestionDetail } from '@/components/molecules/question'
import { useLocalSearchParams } from 'expo-router'
import * as React from 'react'
import { StyleSheet, View } from 'react-native'

export default () => {
  const { id } = useLocalSearchParams<{ id: string }>()

  return (
    <View style={styles.container}>
      <QuestionDetail questionId={id} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
