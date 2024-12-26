import { useLocalSearchParams } from 'expo-router'
import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface QuestionDetailLayoutProps {}

export default function QuestionDetailLayout() {
  const { id } = useLocalSearchParams()

  return (
    <View style={styles.container}>
      <Text>QuestionDetail: {id}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
})
