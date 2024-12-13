import { CustomSafeAreaView } from '@/components'
import Settings from '@/components/organisms/Settings'
import React from 'react'
import { StyleSheet } from 'react-native'

export default function Profile() {
  return (
    <CustomSafeAreaView style={styles.container}>
      <Settings />
    </CustomSafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
})
