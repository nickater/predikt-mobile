import { CustomSafeAreaView, ViewQuestions } from '@/components'
import React from 'react'
import { StyleSheet } from 'react-native'

export default function Profile() {
  return (
    <CustomSafeAreaView style={styles.container}>
      <ViewQuestions />
    </CustomSafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
})
