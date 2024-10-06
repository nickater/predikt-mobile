import { CreateQuestion } from '@/components'
import React from 'react'
import { StyleSheet, View } from 'react-native'

export default () => {
  return (
    <View style={styles.container}>
      <CreateQuestion />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f9f9',
    flex: 1,
  },
})
