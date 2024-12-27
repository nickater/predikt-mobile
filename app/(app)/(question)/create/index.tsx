import { CreateQuestion, CustomSafeAreaView } from '@/components'
import Settings from '@/components/organisms/Profile'
import React from 'react'
import { StyleSheet } from 'react-native'

export default function Profile() {
  return (
    <CustomSafeAreaView style={styles.container}>
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
