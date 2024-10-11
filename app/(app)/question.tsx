import { CreateQuestion, CustomSafeAreaView, ViewQuestion } from '@/components'
import React from 'react'
import { StyleSheet } from 'react-native'

export default () => {
  return (
    <CustomSafeAreaView style={styles.container}>
      <ViewQuestion />
      <CreateQuestion />
    </CustomSafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
})
